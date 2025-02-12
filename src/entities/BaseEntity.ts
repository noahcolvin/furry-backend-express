import { Collection, EntitySchema, ReferenceKind, wrap } from '@mikro-orm/core';

export class BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;

  constructor() {
    this.id = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    const props: { [key: string]: any } = wrap(this, true).__meta.properties;

    Object.keys(props).forEach(prop => {
      if ([ReferenceKind.ONE_TO_MANY, ReferenceKind.MANY_TO_MANY].includes(props[prop].reference)) {
        this[prop] = new Collection(this);
      }
    });
  }
}

export const schema = new EntitySchema<BaseEntity>({
  name: 'BaseEntity',
  properties: {
    id: { primary: true, type: 'number' },
    createdAt: { type: 'Date' },
    updatedAt: { type: 'Date', onUpdate: () => new Date() },
  },
});
