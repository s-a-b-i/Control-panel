// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'sales'], default: 'sales' },
  isActive: { type: Boolean, default: true },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true });

// Remove sensitive information when converting to JSON
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  return user;
};

export default mongoose.model('User', userSchema);


