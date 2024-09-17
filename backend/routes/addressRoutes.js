import express from 'express';
import {getAddresses , createAddress, deleteAddress, updateAddress} from '../controllers/addressController.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

router.get('/get/addresses',getAddresses);
router.post('/add/addresses' ,createAddress);
router.delete('/delete/addresses/:id', deleteAddress);
router.put('/update/addresses/:id', updateAddress);

export default router;