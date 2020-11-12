import express from 'express';
import { allCats } from './src/data';
import { findCats } from './src/controller';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/cats', (req, res) => findCats(req, res, allCats));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
