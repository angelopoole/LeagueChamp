/* eslint-disable import/extensions */
import express from 'express';

import { getAllChampionData, getChampionById } from '../controllers/dataDragonController.js';

const router = express.Router();

router.route('/').get(getAllChampionData);

console.log('object');

router.route('/:id').get(getChampionById);

export default router;
