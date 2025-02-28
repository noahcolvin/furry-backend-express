require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import myFriendsRoutes from './routes/myFriends';
import storeItemsRoutes from './routes/items';
import myFavoriteItemsRoutes from './routes/my-favorite-items';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(myFriendsRoutes);
app.use(storeItemsRoutes);
app.use(myFavoriteItemsRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
