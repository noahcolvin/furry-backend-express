import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity.js';

@Entity()
export class StoreItem extends BaseEntity {
  @Property()
  name: string;

  @Property()
  price: number;

  @Property()
  description: string;

  @Property()
  rating: number;

  @Property()
  image: string;

  @Property()
  about: string[];

  @Property()
  categories: string[];

  constructor(name: string, price: number, description: string, rating: number, image: string, about: string[], categories: string[]) {
    super();
    this.name = name;
    this.price = price;
    this.description = description;
    this.rating = rating;
    this.image = image;
    this.about = about;
    this.categories = categories;
  }
}
