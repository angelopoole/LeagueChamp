import express from 'express';
import colors from 'colors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// import { imageDownloader } from './util/photoDownloader.js';
// image downloader will download the static assets for every champion base splash art

import dataDragonRoutes from './routes/dataDragonRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/datadragon/champions', dataDragonRoutes);

// imageDownloader();

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold),
);

// fetch('https://ddragon.leagueoflegends.com/api/versions.json').then(r => r.json()).then(d => console.log(d[0]))
