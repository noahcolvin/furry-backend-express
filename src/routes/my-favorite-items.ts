import express, { Request, Response } from 'express';
import { DI } from '../app.js';
import { StoreItem } from '../entities/StoreItem.js';

const router = express.Router();

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

router.get('/my-favorite-items', async (req: Request, res: Response) => {
  const count = await DI.storeItems.count();
  const randomStoreItems: Set<StoreItem> = new Set();

  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomNumber(count);
    const randomStoreItem = await DI.storeItems.findOne({ id: randomIndex });
    if (!randomStoreItem) {
      continue;
    }
    randomStoreItems.add(randomStoreItem as unknown as StoreItem);
  }
  res.json(Array.from(randomStoreItems)); // Convert Set to Array
});

export default router;
