import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import myFriendsRoutes from './routes/my-friends';
import storeItemsRoutes from './routes/items';
import myFavoriteItemsRoutes from './routes/my-favorite-items';

const app = express();

app.use(express.json());

app.use(myFriendsRoutes);
app.use(storeItemsRoutes);
app.use(myFavoriteItemsRoutes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
