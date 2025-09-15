// ==========================
// models/User.js (Mongo Schema)
// ==========================
const mongoose = require('mongoose'); // Import mongoose library

// Define the structure of a User document in MongoDB
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },       // User's name (required, no extra spaces)
  email: { type: String, required: true, unique: true, lowercase: true }, // User's email (unique + lowercase)
  password: { type: String, required: true },               // User's password (hashed later)
  createdAt: { type: Date, default: Date.now }              // Auto-store creation date
});

// Export the model so it can be used in controllers
module.exports = mongoose.model('User', userSchema);



// ==========================
// controllers/userController.js
// ==========================
const User = require('../models/User');     // Import User model
const bcrypt = require('bcryptjs');         // Import bcrypt for password hashing

// Controller for registering a new user
const registerUser = async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, password } = req.body;

    // Check if user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Encrypt password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user in MongoDB
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Send success response
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    // If something goes wrong, return error
    res.status(500).json({ message: 'Server error', error });
  }
};

// Export controller function
module.exports = { registerUser };



// ==========================
// routes/userRoutes.js
// ==========================
const express = require('express');                    // Import express
const { registerUser } = require('../controllers/userController'); // Import controller
const router = express.Router();                       // Create a new router object

// Route: POST /api/users/register → calls registerUser controller
router.post('/register', registerUser);

// Export router so it can be used in server
module.exports = router;



// ==========================
// index.js (Server Entry Point)
// ==========================
const express = require('express');         // Import express
const mongoose = require('mongoose');       // Import mongoose
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express();                      // Create express app
app.use(express.json());                    // Middleware to parse JSON request body

// Connect MongoDB (make sure MongoDB is running locally)
mongoose.connect('mongodb://127.0.0.1:27017/backend-sep', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Use routes for user-related API
app.use('/api/users', userRoutes);

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
