import { Request, Response } from 'express';
import { DEFAULT_LIMIT } from './constants';
import { Cat } from './model';
import { CatQueryInterface } from './types';

/**
 * @function findCats - find out the cats that match the query
 * @param req - Request
 * @param res - Response
 * @param cats - Cat[]
 */
export const findCats = (req: Request, res: Response, cats: Cat[]) => {
  const query = req.query as CatQueryInterface;

  /**
   * Logic to Find Cats
   * 1. Get the similarity of each cat
   * 2. Eliminate the cat that doesn't share similarity at all
   * 3. Sort the cats based on similarity
   * 4. Only return the paginated result
   */
  const searchResults = cats
    .map((cat) => ({
      ...cat.toObject(),
      similarity: cat.findMatches(query),
    }))
    .filter((cat) => cat.similarity > 0)
    .sort((resultA, resultB) => resultB.similarity - resultA.similarity)
    .slice(query.offset || 0, query.limit || DEFAULT_LIMIT);

  return res.json(searchResults);
};
