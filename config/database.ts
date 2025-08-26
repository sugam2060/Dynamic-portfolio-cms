import path from 'path';

export default ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  const client = isProduction ? 'postgres' : 'sqlite';

  const connections = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        host: env('DATABASE_HOST', undefined), // Strapi Cloud sets this automatically
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', undefined),
        user: env('DATABASE_USERNAME', undefined),
        password: env('DATABASE_PASSWORD', undefined),
        ssl: { rejectUnauthorized: false },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
