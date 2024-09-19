import ControlRecord from "../models/ControlRecordSchema.js";

export const getControlRecords = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNo, userId } = req.query;
    const query = {};
    
    if (deviceNo) query['deviceInfo.deviceNo'] = { $regex: deviceNo, $options: 'i' };
    if (userId) query['userInfo.userId'] = { $regex: userId, $options: 'i' };

    const records = await ControlRecord.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await ControlRecord.countDocuments(query);

    res.json({
      records,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createControlRecord = async (req, res) => {
  const record = new ControlRecord({
    ...req.body,
    lastControlTime: new Date()
  });

  try {
    const newRecord = await record.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateControlRecord = async (req, res) => {
  try {
    const updatedRecord = await ControlRecord.findByIdAndUpdate(
      req.params.id,
      { ...req.body, lastControlTime: new Date() },
      { new: true }
    );
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteControlRecord = async (req, res) => {
  try {
    await ControlRecord.findByIdAndDelete(req.params.id);
    res.json({ message: 'Control record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};