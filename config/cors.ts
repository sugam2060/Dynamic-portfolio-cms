export default ({ env }) => ({
  enabled: true,
  origin: [
    // Local development
    'http://localhost:3000',
    'http://localhost:1337',

    // Production frontend
    env('FRONTEND_URL'),
  ].filter(Boolean), // keep only non-empty values

  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});
