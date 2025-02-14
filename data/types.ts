import { Generated, Selectable } from 'kysely';

export interface Database {
  friend: FriendTable;
  item: ItemTable;
}

export interface ItemTable {
  id: Generated<number>;

  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  about: string[];
  categories: string[];
}

export type Item = Selectable<ItemTable>;

export interface FriendTable {
  id: Generated<number>;
  name: string;
  image: string;
}

export type Friend = Selectable<FriendTable>;
