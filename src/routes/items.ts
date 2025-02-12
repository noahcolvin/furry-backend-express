import express, { Request, Response } from 'express';
import { StoreItems } from '../data/store-items';
const router = express.Router();

router.get('/items', (req: Request, res: Response) => {
  const { animal, product, search } = req.query;

  let filteredItems = StoreItems;

  if (animal) {
    filteredItems = filteredItems.filter(item => item.categories.includes(animal as string));
  }

  if (product) {
    filteredItems = filteredItems.filter(item => item.categories.includes(product as string));
  }

  if (search) {
    const searchLower = (search as string).toLowerCase();
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(searchLower) || item.description.toLowerCase().includes(searchLower));
  }

  res.json(filteredItems);
});

export default router;
