import express from 'express';
import { addUser, resetPassword ,deactivateUser, getSalesAccounts } from '../controllers/userController.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

router.post('/user/add', auth, addUser);
router.post('/user/reset-password', auth, resetPassword);
router.get('/user/sales', auth, getSalesAccounts);
router.post('/user/deactivate', auth, deactivateUser);

export default router;