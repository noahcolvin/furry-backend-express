import { EntitySchema } from '@mikro-orm/core';
import { BaseEntity, schema as baseSchema } from './BaseEntity.js';

export class Friend extends BaseEntity {
  constructor(name: string, image: string) {
    super();
    this.name = name;
    this.image = image;
  }
}

export const schema = new EntitySchema<Friend, BaseEntity>({
  class: Friend,
  extends: 'BaseEntity',
  properties: {
    name: { type: 'string' },
    image: { type: 'string' },
  },
});
