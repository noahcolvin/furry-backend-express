import { MikroORM } from '@mikro-orm/core';
import { FriendSeeder } from './FriendSeeder.js';

const seedData = async () => {
  const orm = await MikroORM.init();
  await orm.schema.ensureDatabase();

  await orm.schema.refreshDatabase();
  await orm.seeder.seed(FriendSeeder);
};

seedData().then(() => {
  console.log('Database initialized successfully');
});
