import express, { Request, Response } from 'express';
import { db } from '../data/database';

const router = express.Router();

router.get('/items', async (req: Request, res: Response) => {
  const { animal, product, search } = req.query;

  let query = db.selectFrom('item');

  if (animal) {
    query = query.where('categories', '&&', `{${animal as string}}` as any);
  }

  if (product) {
    query = query.where('categories', '&&', `{${product as string}}` as any);
  }

  if (search) {
    query = query.where(eb => eb.or([eb('name', 'ilike', `%${search}%`), eb('description', 'ilike', `%${search}%`)]));
  }

  const items = await query.selectAll().execute();

  res.json(items);
});

export default router;
