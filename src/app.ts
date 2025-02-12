//require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import myFriendsRoutes from './routes/myFriends.js';
import storeItemsRoutes from './routes/items.js';
import myFavoriteItemsRoutes from './routes/my-favorite-items.js';

import { MikroORM } from '@mikro-orm/postgresql'; // or any other driver package

const bootstrap = async () => {
  // initialize the ORM, loading the config file dynamically
  const orm = await MikroORM.init();
  console.log(orm.em); // access EntityManager via `em` property
  console.log(orm.schema); // access SchemaGeneartor via `schema` property

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
};

bootstrap().then(() => {
  console.log('Application bootstrapped successfully');
});
