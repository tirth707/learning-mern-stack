const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express(); // Initialized first to fix the ReferenceError

// Middleware
app.use(express.json()); 
app.use(cors()); // Only one cors entry is needed

// Database Connection
mongoose.connect('mongodb://localhost:27017/authDB')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Database connection error:", err));

// User Model
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Register Route
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: '1h' });
        res.json({ token, message: "Logged in successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Login failed" });
    }
});

app.listen(5001, () => console.log("Server running on port 5001"));