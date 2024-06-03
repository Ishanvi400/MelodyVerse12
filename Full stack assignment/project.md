# ASSIGNMENT QUESTION
Technology Stack:
Node.js and npm
Express.js or another suitable Node.js framework
A database of your choice (MongoDB, PostgreSQL, MySQL, etc.)
jsonwebtoken library for JWT generation and validation
Use React.js for component structure and functionality.

Signup Screen:
1. [ ] Include fields for username/email, password (with confirmation), and optional fields like name and profile picture.
2. [ ] Implement validation for the required fields and email format using React state management and validation libraries.
3. [ ] Include terms and conditions checkbox.
4. [ ] Display clear error messages and success messages.
5. [ ] Simulate sending a welcome email notification upon successful signup (no actual email sending required).
6. [ ] Redirect to the post list screen after successful signup using React Router.
General Requirements:

Post list Screen:

7. [ ] There should be a screen where user can scroll infinitely and posts will be rendered using GET api of posts. 
8. [ ] Implement responsive design using Tailwind.
9. [ ] Ensure the screens are visually appealing and consistent with the "MelodyVerse" theme (design details left to your   interpretation).
10. [ ] Submit your code as a zip file or a link to a public repository.

API Endpoints:
POST /signup:

11. [ ] Registers a new user with provided username, email, and password.
12. [ ] Validates input, ensures unique usernames and emails, hashes passwords securely.
13. [ ] Stores user data in the database.
14. [ ] Returns a success message and JWT token upon successful registration.

GET /posts:

15. [ ] Paginated implementation of fetching posts data from database.
16. [ ] Should be secure and non authenticated apis should be rejected. 

JWT Implementation:

17. [ ] Generate JWT tokens with appropriate payload and expiration time upon successful login.
18. [ ] Validate JWT tokens in protected routes to ensure user authentication.
19. [ ] Implement robust token refresh mechanisms if desired.

Best Practices:

20. [ ] Enforce input validation and sanitization to prevent vulnerabilities.
21. [ ] Protect against common attacks like SQL injection and XSS.
22. [ ] Securely store passwords using strong hashing algorithms (bcrypt or Argon2).
23. [ ] Implement proper error handling and provide informative error messages.
24. [ ] Write clean, well-structured, and documented code.
25. [ ] Consider using environment variables for sensitive information.
26. [ ] Handle sessions and token expiration effectively.

Bonus Points:

27. [ ] Implement password reset functionality.
28. [ ] Integrate email verification for signup.
29. [ ] Add rate limiting to protect against brute force attacks.
30. [ ] Use middleware for authentication and authorization.
31. [ ] Write unit tests for API endpoints.
32. [ ] Implement social login options using mock APIs and React libraries.
33. [ ] Add password visibility toggle.
34. [ ] Use animations or microinteractions with React libraries like Framer Motion to enhance user experience.
35. [ ] Include accessibility features like alt text and keyboard navigation using ARIA attributes and focus management.
36. [ ] Implement unit testing for your React components using Jest or similar libraries.v
