import express from 'express';
const router = express.Router();

import {
	getAllChampionData,
	getChampionById,
} from '../controllers/dataDragonController.js';

router.route('/').get(getAllChampionData);

router.route('/:id').get(getChampionById);

export default router;
