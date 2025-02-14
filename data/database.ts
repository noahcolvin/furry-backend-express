import { Database } from './types';
import { Pool, types } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

types.setTypeParser(types.builtins.NUMERIC, val => {
  return parseFloat(val);
});

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'furrydb',
    host: 'localhost',
    user: 'furry',
    password: 'furrypass',
    port: 5432,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
