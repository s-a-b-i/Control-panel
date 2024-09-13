import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const addUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'User created successfully', user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const resetPassword = async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const deactivateUser = async (req, res) => {
    const { userId } = req.body;
    
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.isActive = false;
      await user.save();
  
      res.json({ message: 'User deactivated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  


  export const getSalesAccounts = async (req, res) => {
    try {
      const salesUsers = await User.find({ role: 'sales' });
      res.status(200).json(salesUsers);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  