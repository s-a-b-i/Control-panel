import express from 'express';
import { getAssets, createAsset, deleteAsset, updateAsset } from '../controllers/assetController.js';

const router = express.Router();

router.get('/get/assets', getAssets);
router.post('/add/asset', createAsset);
router.delete('/delete/asset/:id', deleteAsset);
router.put('/update/asset/:id', updateAsset);

export default router;