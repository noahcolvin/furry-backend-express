import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Friend {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  image!: string;
}
