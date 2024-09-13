import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  amount: Number,
  currency: String,
  fromAddress: String,
  toAddress: String,
  isInternalSettlement: Boolean,
  isPlatformSettlement: Boolean,
}, { timestamps: true });

export default mongoose.model('Transaction', transactionSchema);