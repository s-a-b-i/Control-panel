import express from 'express';
import {getApplications, createApplication, updateApplication, deleteApplication} from '../controllers/applicationController.js';

const router = express.Router();

router.get('/get/applications', getApplications);
router.post('/add/application', createApplication);
router.put('/update/application/:id', updateApplication);
router.delete('/delete/application/:id', deleteApplication);

export default router;