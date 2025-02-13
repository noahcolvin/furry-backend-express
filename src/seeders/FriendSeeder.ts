import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Friend } from '../entities/Friend.js';

export class FriendSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const storageUrl = process.env.STORAGE_URL || '';

    const friends = [
      { name: 'Alice', image: storageUrl + '/furry-public/pets/pet1.jpg' },
      { name: 'Bob', image: storageUrl + '/furry-public/pets/pet2.jpg' },
      { name: 'Charlie', image: storageUrl + '/furry-public/pets/pet3.jpg' },
      { name: 'David', image: storageUrl + '/furry-public/pets/pet4.jpg' },
      { name: 'Eve', image: storageUrl + '/furry-public/pets/pet5.jpg' },
      { name: 'Frank', image: storageUrl + '/furry-public/pets/pet6.jpg' },
      { name: 'Grace', image: storageUrl + '/furry-public/pets/pet7.jpg' },
      { name: 'Hank', image: storageUrl + '/furry-public/pets/pet8.jpg' },
    ];

    friends.forEach(friend => em.create(Friend, friend as Friend));
  }
}
