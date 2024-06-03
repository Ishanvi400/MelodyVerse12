const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});