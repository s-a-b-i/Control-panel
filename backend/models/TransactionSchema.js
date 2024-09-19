// TransactionSchema.js
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  deviceNo: String,
  brand: String,
  model: String,
  userId: String,
  account: String,
  nickname: String,
  wallet: String,
  currency: String,
  transactionTime: {
    type: Date,
    default: Date.now
  },
  amount: Number,
  unit: String,
  balance: String,
  paymentAddress1: String,
  companyResult: String,
  paymentAddress2: String,
  internalSettlement: String,
  settlementWith: String,
  merchantSettlement: String
});

export default mongoose.model('Transaction', transactionSchema);