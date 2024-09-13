import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  address: String,
  label: String,
  currency: String,
}, { timestamps: true });

export default mongoose.model('Address', addressSchema);