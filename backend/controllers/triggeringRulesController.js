import TriggeringRule from "../models/TriggeringRuleSchema.js";

export const getTriggeringRules = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNumber } = req.query;
    const query = deviceNumber ? { deviceNumber: { $regex: deviceNumber, $options: 'i' } } : {};

    const rules = await TriggeringRule.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await TriggeringRule.countDocuments(query);

    res.json({
      rules,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTriggeringRule = async (req, res) => {
  const rule = new TriggeringRule({
    deviceNumber: req.body.deviceNumber,
    unitsOfMeasure: req.body.unitsOfMeasure,
    triggerAmount: req.body.triggerAmount
  });

  try {
    const newRule = await rule.save();
    res.status(201).json(newRule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTriggeringRule = async (req, res) => {
  try {
    await TriggeringRule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Triggering rule deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTriggeringRule = async (req, res) => {
  try {
    const updatedRule = await TriggeringRule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};