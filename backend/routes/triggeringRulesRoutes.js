import express from 'express';
import { getTriggeringRules, createTriggeringRule, deleteTriggeringRule, updateTriggeringRule } from '../controllers/triggeringRulesController.js';

const router = express.Router();

router.get('/get/triggering-rules', getTriggeringRules);
router.post('/add/triggering-rules', createTriggeringRule);
router.delete('/delete/triggering-rules/:id', deleteTriggeringRule);
router.put('/update/triggering-rules/:id', updateTriggeringRule);

export default router;