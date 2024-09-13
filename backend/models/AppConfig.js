import mongoose from 'mongoose';

const appConfigSchema = new mongoose.Schema({
  packageType: { type: String, enum: ['web', 'inject'], required: true },
  appName: String,
  webLink: String,
  icon: String,
  startupImage: String,
  startupImageLink: String,
  startupImageTime: Number,
  displayMode: { type: String, enum: ['full', 'statusBar', 'statusBarAndNav'] },
  injectedAppPath: String,
}, { timestamps: true });

export default mongoose.model('AppConfig', appConfigSchema);