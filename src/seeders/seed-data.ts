import { MikroORM } from '@mikro-orm/core';
import { FriendSeeder } from './FriendSeeder.js';
import { StoreItemSeeder } from './StoreItemSeeder.js';

const seedData = async () => {
  const orm = await MikroORM.init();
  await orm.schema.ensureDatabase();

  await orm.schema.refreshDatabase();
  await orm.seeder.seed(FriendSeeder);
  await orm.seeder.seed(StoreItemSeeder);
};

seedData().then(() => {
  console.log('Database initialized successfully');
  return process.exit(0);
});
