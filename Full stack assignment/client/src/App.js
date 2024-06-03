const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if all fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Find the user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // Send the token as a response
  res.json({ message: 'Logged in successfully.', token });
});

function authenticateToken(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

app.get('/protected', authenticateToken, (req, res) => {
  // Protected route logic
  res.json({ message: 'This is a protected route.', user: req.user });
});

function authenticateToken(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}