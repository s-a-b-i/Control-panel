import mongoose from 'mongoose';

const controlRecordSchema = new mongoose.Schema({
  deviceInfo: {
    deviceNo: String,
    brand: String,
    model: String
  },
  userInfo: {
    userId: String,
    account: String,
    nickname: String
  },
  projectionRecords: Number,
  lastControlTime: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ControlRecord', controlRecordSchema);