import mongoose from 'mongoose';

const keyboardRecordSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  contentTag: String,
  appPackageName: String,
  notes: String,
  content: String,
  isPassword: Boolean,
  hasBackspace: Boolean,
}, { timestamps: true });

export default mongoose.model('KeyboardRecord', keyboardRecordSchema);
