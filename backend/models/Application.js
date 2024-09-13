import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  appName: String,
  packageName: String,
  label: String,
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
