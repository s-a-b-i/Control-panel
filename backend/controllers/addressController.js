import AddressList from "../models/AddressListSchema.js";

export const getAddresses = async (req, res) => {
  try {
    const { page = 1, limit = 10, currency, addressType, remark } = req.query;
    const query = {};

    if (currency && currency !== 'all') query.currency = currency;
    if (addressType && addressType !== 'all') query.addressType = addressType;
    if (remark) query.remark = { $regex: remark, $options: 'i' };

    const addresses = await AddressList.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await AddressList.countDocuments(query);

    res.json({
      addresses,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAddress = async (req, res) => {
  const address = new AddressList({
    currency: req.body.currency,
    addressCiphertext: req.body.addressCiphertext,
    addressTips: req.body.addressTips,
    addressType: req.body.addressType,
    remark: req.body.remark
  });

  try {
    const newAddress = await address.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    await AddressList.findByIdAndDelete(req.params.id);
    res.json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const updatedAddress = await AddressList.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};