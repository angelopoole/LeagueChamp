import express from 'express';
import colors from 'colors';
// import { imageDownloader } from './util/photoDownloader.js';
// image downloader will download the static assets for every champion base splash art

import dataDragonRoutes from './routes/dataDragonRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/datadragon/champions', dataDragonRoutes);

// imageDownloader();

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
