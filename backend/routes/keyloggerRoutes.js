import express from 'express';
import { getKeyloggerEntries, createKeyloggerEntry, deleteKeyloggerEntry, updateKeyloggerEntry } from '../controllers/keyloggerController.js';

const router = express.Router();

router.get('/get/keylogger', getKeyloggerEntries);
router.post('/add/keylogger', createKeyloggerEntry);
router.delete('/delete/keylogger/:id', deleteKeyloggerEntry);
router.put('/update/keylogger/:id', updateKeyloggerEntry);

export default router;