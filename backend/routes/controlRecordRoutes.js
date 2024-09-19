import express from 'express';
import { getControlRecords, createControlRecord, updateControlRecord, deleteControlRecord } from '../controllers/controlRecordController.js';

const router = express.Router();

router.get('/control-records', getControlRecords);
router.post('/control-records', createControlRecord);
router.put('/control-records/:id', updateControlRecord);
router.delete('/control-records/:id', deleteControlRecord);

export default router;