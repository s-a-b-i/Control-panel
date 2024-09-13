// routes/authRoutes.js
import express from 'express';
import { adminLogin, adminLogout, adminLogoutAll } from '../controllers/authController.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/admin/login', adminLogin);
router.post('/admin/logout', auth, adminAuth, adminLogout);
router.post('/admin/logoutAll', auth, adminAuth, adminLogoutAll);

export default router;