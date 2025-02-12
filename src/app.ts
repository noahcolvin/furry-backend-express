//require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import myFriendsRoutes from './routes/myFriends.js';
import storeItemsRoutes from './routes/items.js';
import myFavoriteItemsRoutes from './routes/my-favorite-items.js';

import { MikroORM, RequestContext, EntityManager, IDatabaseDriver, Connection, EntityRepository } from '@mikro-orm/core';
import { Friend } from './modules/friends/friend.entity.js';

interface DIType {
  orm: MikroORM<IDatabaseDriver<Connection>>;
  em: EntityManager<IDatabaseDriver<Connection>>;
  friends: EntityRepository<Friend>;
}

export const DI = {} as DIType;

const bootstrap = async () => {
  // initialize the ORM, loading the config file dynamically
  const orm = await MikroORM.init();
  await orm.schema.ensureDatabase();
  console.log(orm.em); // access EntityManager via `em` property
  console.log(orm.schema); // access SchemaGenerator via `schema` property

  DI.orm = orm;
  DI.em = orm.em;
  DI.friends = orm.em.getRepository(Friend);

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use((req: Request, res: Response, next: NextFunction) => {
    RequestContext.create(DI.orm.em, next);
    (req as any).di = DI;
  });

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
