export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', undefined),   // Strapi Cloud sets this automatically
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', undefined),
      user: env('DATABASE_USERNAME', undefined),
      password: env('DATABASE_PASSWORD', undefined),
      ssl: env.bool('DATABASE_SSL', true) && { rejectUnauthorized: false },
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60000,
  },
});
