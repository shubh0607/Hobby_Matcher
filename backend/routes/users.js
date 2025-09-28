
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, hobbies, location } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      hobbies,
      location
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ 
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          hobbies: user.hobbies
        }
      });
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Find users with matching hobbies
router.get('/matches', auth, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    console.log('Current user hobbies:', currentUser.hobbies);
    
    let matches = await User.find({
      _id: { $ne: req.user.id },
      hobbies: { $in: currentUser.hobbies }
    }).select('-password');

    console.log('Found matches:', matches.length);
    
    if (matches.length === 0) {
      console.log('No exact matches, showing users with any hobbies');
      matches = await User.find({
        _id: { $ne: req.user.id },
        hobbies: { $exists: true, $not: { $size: 0 } }
      }).select('-password').limit(10);
    }

    res.json(matches);
  } catch (error) {
    console.error('Matches error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users
router.get('/all', auth, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } })
      .select('-password')
      .limit(10);
    res.json(users);
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Debug routes
router.get('/debug/all', async (req, res) => {
  try {
    const users = await User.find().select('name email hobbies');
    res.json(users);
  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/debug/hobbies', async (req, res) => {
  try {
    const users = await User.find().select('name email hobbies');
    const hobbyData = users.map(user => ({
      name: user.name,
      email: user.email,
      hobbies: user.hobbies || []
    }));
    res.json(hobbyData);
  } catch (error) {
    console.error('Debug hobbies error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
