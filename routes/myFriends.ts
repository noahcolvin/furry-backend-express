import express, { Request, Response } from 'express';
const router = express.Router();

const storageUrl = process.env.STORAGE_URL || '';

interface MyFriend {
  name: string;
  image: string;
}

const friends: MyFriend[] = [
  { name: 'Alice', image: storageUrl + '/furry-public/pets/pet1.jpg' },
  { name: 'Bob', image: storageUrl + '/furry-public/pets/pet2.jpg' },
  { name: 'Charlie', image: storageUrl + '/furry-public/pets/pet3.jpg' },
  { name: 'David', image: storageUrl + '/furry-public/pets/pet4.jpg' },
  { name: 'Eve', image: storageUrl + '/furry-public/pets/pet5.jpg' },
  { name: 'Frank', image: storageUrl + '/furry-public/pets/pet6.jpg' },
  { name: 'Grace', image: storageUrl + '/furry-public/pets/pet7.jpg' },
  { name: 'Hank', image: storageUrl + '/furry-public/pets/pet8.jpg' },
];

function getRandomFriends(): MyFriend[] {
  const numberOfFriends = Math.floor(Math.random() * 3) + 1;
  const shuffledFriends = friends.sort(() => 0.5 - Math.random());
  return shuffledFriends.slice(0, numberOfFriends);
}

router.get('/my-friends', (req: Request, res: Response) => {
  res.json(getRandomFriends());
});

export default router;
