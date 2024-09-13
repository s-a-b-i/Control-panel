// controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: 'Please provide both username and password.' });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid login credentials.' });
    }

    // Check if user is an admin
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid login credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Save token to user document
    user.tokens = user.tokens || [];
    user.tokens.push({ token });
    await user.save();

    // Send response
    res.json({
      message: 'Admin logged in successfully',
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
};

export const adminLogout = async (req, res) => {
  try {
    // Remove the current token from the user's tokens array
    req.user.tokens = req.user.tokens.filter((tokenObj) => tokenObj.token !== req.token);
    await req.user.save();
    res.json({ message: 'Admin logged out successfully' });
  } catch (error) {
    console.error('Admin logout error:', error);
    res.status(500).json({ error: 'An error occurred during logout.' });
  }
};

export const adminLogoutAll = async (req, res) => {
  try {
    // Remove all tokens from the user's tokens array
    req.user.tokens = [];
    await req.user.save();
    res.json({ message: 'Admin logged out from all devices successfully' });
  } catch (error) {
    console.error('Admin logout all error:', error);
    res.status(500).json({ error: 'An error occurred during logout from all devices.' });
  }
};

