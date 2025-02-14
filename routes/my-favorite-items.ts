import express, { Request, Response } from 'express';
import { db } from '../data/database';

const router = express.Router();

const getRandomUniqueNumbers = (max: number): number[] => {
  const numberOfValues = Math.floor(Math.random() * 3) + 2;
  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < numberOfValues) {
    uniqueNumbers.add(Math.floor(Math.random() * max) + 1);
  }

  return Array.from(uniqueNumbers);
};

router.get('/my-favorite-items', async (req: Request, res: Response) => {
  const { count } = await db.selectFrom('item').select(db.fn.countAll().as('count')).executeTakeFirstOrThrow();
  const randomItemIds = getRandomUniqueNumbers(Number(count) - 1);
  const items = await db.selectFrom('item').selectAll().where('id', 'in', randomItemIds).execute();

  res.json(items);
});

export default router;
