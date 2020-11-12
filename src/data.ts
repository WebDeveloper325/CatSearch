import fs from 'fs';
import path from 'path';

import { CatInterface } from './types';
import { CatCollection } from './model';

// Load the cats and return the result as array of CatInterface
const loadCats = (): CatInterface[] => {
  const rawData = fs.readFileSync(
    path.resolve(__dirname, '../assets/cats.json'),
    'utf8',
  );

  return JSON.parse(rawData) as CatInterface[];
};

export const allCats = new CatCollection(loadCats()).cats;
