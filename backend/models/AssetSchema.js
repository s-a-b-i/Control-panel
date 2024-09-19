import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
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
  wallet: String,
  currency: String,
  amount: Number,
  amountUSD: Number,
  updateTime: {
    type: Date,
    default: Date.now
  }
});

assetSchema.pre('save', function(next) {
  this.updateTime = Date.now();
  next();
});

export default mongoose.model('Asset', assetSchema);