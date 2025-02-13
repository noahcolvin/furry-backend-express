import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity.js';

@Entity()
export class Friend extends BaseEntity {
  @Property()
  name: string;

  @Property()
  image: string;

  constructor(name: string, image: string) {
    super();
    this.name = name;
    this.image = image;
  }
}
