import express from 'express';

import { getAllChampionData, getChampionById } from '../controllers/dataDragonController.js';

const router = express.Router();

router.route('/').get(getAllChampionData);

router.route('/:id').get(getChampionById);

export default router;
