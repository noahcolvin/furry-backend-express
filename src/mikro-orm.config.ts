import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';

const config: Options = {
  driver: PostgreSqlDriver,
  user: 'furry',
  password: 'furrypass',
  dbName: 'furrydb',
  host: 'localhost',
  port: 5432,
  // folder-based discovery setup, using common filename suffix
  entities: ['dist/**/entities/*.js'],
  entitiesTs: ['src/**/entities/*.ts'],
  // we will use the ts-morph reflection, an alternative to the default reflect-metadata provider
  // check the documentation for their differences: https://mikro-orm.io/docs/metadata-providers
  metadataProvider: TsMorphMetadataProvider,
  // enable debug mode to log SQL queries and discovery information
  debug: true,
  extensions: [SeedManager],
};

export default config;
