import express, { Request, Response } from 'express';
import { DI } from '../app.js';
import { Friend } from '../entities/Friend.js';

const router = express.Router();

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

router.get('/my-friends', async (req: Request, res: Response) => {
  const count = await DI.friends.count();
  const randomFriends: Set<Friend> = new Set();

  for (let i = 0; i < 3; i++) {
    const randomIndex = getRandomNumber(count);
    const randomFriend = await DI.friends.findOne({ id: randomIndex });
    if (!randomFriend) {
      continue;
    }
    randomFriends.add(randomFriend as unknown as Friend);
  }
  res.json(Array.from(randomFriends)); // Convert Set to Array
});

export default router;
