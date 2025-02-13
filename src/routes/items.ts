import express, { Request, Response } from 'express';
import { DI } from '../app.js';

const router = express.Router();

router.get('/items', async (req: Request, res: Response) => {
  const { animal, product, search } = req.query;

  const query: any = {};

  if (animal && product) {
    query.categories = {
      $contains: [animal, product],
    };
  } else if (animal) {
    query.categories = {
      $contains: [animal],
    };
  } else if (product) {
    query.categories = {
      $contains: [product],
    };
  }

  if (search) {
    const searchLower = (search as string).toLowerCase();
    query.$or = [
      { name: { $ilike: `%${searchLower}%` } },
      { description: { $ilike: `%${searchLower}%` } },
    ];
  }

  console.log('query', query);

  const items = await DI.storeItems.find(query);

  res.json(items);
});

export default router;
