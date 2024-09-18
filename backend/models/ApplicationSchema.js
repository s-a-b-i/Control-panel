import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  deviceNo: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  appName: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  appIcon: {
    type: String,
  },
  tagNotes: {
    type: String,
  },
  recordingTime: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Application', ApplicationSchema);