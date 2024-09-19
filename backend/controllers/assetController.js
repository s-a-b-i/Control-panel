import Asset from "../models/AssetSchema.js";

export const getAssets = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNo, wallet } = req.query;
    const query = {};
    if (deviceNo) query['deviceInfo.deviceNo'] = { $regex: deviceNo, $options: 'i' };
    if (wallet) query.wallet = wallet;

    const assets = await Asset.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Asset.countDocuments(query);

    res.json({
      assets,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAsset = async (req, res) => {
  const asset = new Asset(req.body);
  try {
    const newAsset = await asset.save();
    res.status(201).json(newAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAsset = async (req, res) => {
  try {
    await Asset.findByIdAndDelete(req.params.id);
    res.json({ message: 'Asset deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};