import mongoose from 'mongoose';

const triggerRuleSchema = new mongoose.Schema({
  currency: String,
  triggerAmount: Number,
  action: String,
}, { timestamps: true });

export default mongoose.model('TriggerRule', triggerRuleSchema);
