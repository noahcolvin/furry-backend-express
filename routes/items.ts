import express, { Request, Response } from 'express';
import { StoreItems } from '../data/store-items';
const router = express.Router();

router.get('/items', (req: Request, res: Response) => {
  res.json(StoreItems);
});

export default router;
