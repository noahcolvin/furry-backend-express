import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('friend')
    .addColumn('id', 'numeric', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('image', 'varchar', col => col.notNull())
    .execute();

  await db.schema
    .createTable('item')
    .addColumn('id', 'numeric', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('price', 'numeric', col => col.notNull())
    .addColumn('description', 'varchar', col => col.notNull())
    .addColumn('rating', 'numeric', col => col.notNull())
    .addColumn('image', 'varchar', col => col.notNull())
    .addColumn('about', sql`text[]`, col => col.notNull())
    .addColumn('categories', sql`text[]`, col => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('item').execute();
  await db.schema.dropTable('friend').execute();
}
