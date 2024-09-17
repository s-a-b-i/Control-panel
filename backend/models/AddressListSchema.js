import mongoose from 'mongoose';


const addressListSchema = new mongoose.Schema({
  currency: String,
  addressCiphertext: String,
  addressTips: String,
  addressType: { type: String, default: 'company' },
  remark: { type: String, default: 'First time offering' },
  creationTime: { type: Date, default: Date.now }
});

export default mongoose.model('AddressList', addressListSchema);