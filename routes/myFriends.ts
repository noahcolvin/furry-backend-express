import express, { Request, Response } from 'express';
import { db } from '../data/database';

const router = express.Router();

const getRandomUniqueNumbers = (max: number): number[] => {
  const numberOfValues = Math.floor(Math.random() * 3) + 1;
  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < numberOfValues) {
    uniqueNumbers.add(Math.floor(Math.random() * max) + 1);
  }

  return Array.from(uniqueNumbers);
};

router.get('/my-friends', async (req: Request, res: Response) => {
  const { count } = await db.selectFrom('friend').select(db.fn.countAll().as('count')).executeTakeFirstOrThrow();
  const randomFriendIds = getRandomUniqueNumbers(Number(count) - 1);
  console.log(randomFriendIds);
  const friends = await db.selectFrom('friend').selectAll().where('id', 'in', randomFriendIds).execute();

  res.json(friends);
});

export default router;
