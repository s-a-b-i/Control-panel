import mongoose from 'mongoose';

const triggeringRuleSchema = new mongoose.Schema({
  deviceNumber: {
    type: String,
    required: true
  },
  unitsOfMeasure: {
    type: String,
    required: true
  },
  triggerAmount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field on every save
triggeringRuleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('TriggeringRule', triggeringRuleSchema);