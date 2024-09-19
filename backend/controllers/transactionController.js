// transactionController.js
import Transaction from "../models/TransactionSchema.js";

export const getTransactions = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNumber, wallet, currency, internalSettlement, merchantSettlement } = req.query;
    const query = {};

    if (deviceNumber) query.deviceNo = { $regex: deviceNumber, $options: 'i' };
    if (wallet) query.wallet = wallet;
    if (currency) query.currency = currency;
    if (internalSettlement) query.internalSettlement = internalSettlement;
    if (merchantSettlement) query.merchantSettlement = merchantSettlement;

    const transactions = await Transaction.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Transaction.countDocuments(query);

    res.json({
      transactions,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTransaction = async (req, res) => {
  const transaction = new Transaction({
    ...req.body,
    transactionTime: new Date()
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { ...req.body, transactionTime: new Date() },
      { new: true }
    );
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};