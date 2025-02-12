import express, { Request, Response } from 'express';
import { StoreItem, StoreItems } from '../data/store-items.js';

const router = express.Router();

function getRandomItems(): StoreItem[] {
  const numberOfItems = Math.floor(Math.random() * 3) + 2;
  const shuffledStoreItems = StoreItems.sort(() => 0.5 - Math.random());
  return shuffledStoreItems.slice(0, numberOfItems);
}

router.get('/my-favorite-items', (req: Request, res: Response) => {
  res.json(getRandomItems());
});

export default router;
