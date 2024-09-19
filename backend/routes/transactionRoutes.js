// transactionRoutes.js
import express from 'express';
import { getTransactions, createTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/get/transactions', getTransactions);
router.post('/add/transaction', createTransaction);
router.put('/update/transaction/:id', updateTransaction);
router.delete('/delete/transaction/:id', deleteTransaction);

export default router;