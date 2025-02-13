import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Friend } from '../entities/Friend.js';

export class FriendSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const storageUrl = process.env.STORAGE_URL || '';

    em.create(Friend, { name: 'Alice', image: storageUrl + '/furry-public/pets/pet1.jpg' });
    em.create(Friend, { name: 'Bob', image: storageUrl + '/furry-public/pets/pet2.jpg' });
    em.create(Friend, { name: 'Charlie', image: storageUrl + '/furry-public/pets/pet3.jpg' });
    em.create(Friend, { name: 'David', image: storageUrl + '/furry-public/pets/pet4.jpg' });
    em.create(Friend, { name: 'Eve', image: storageUrl + '/furry-public/pets/pet5.jpg' });
    em.create(Friend, { name: 'Frank', image: storageUrl + '/furry-public/pets/pet6.jpg' });
    em.create(Friend, { name: 'Grace', image: storageUrl + '/furry-public/pets/pet7.jpg' });
    em.create(Friend, { name: 'Hank', image: storageUrl + '/furry-public/pets/pet8.jpg' });
  }
}
