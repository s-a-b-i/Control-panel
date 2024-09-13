import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  walletApp: String,
  currency: String,
  amount: Number,
  isSuspicious: Boolean,
  isFakeAsset: Boolean,
}, { timestamps: true });

export default mongoose.model('Asset', assetSchema);