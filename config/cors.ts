export default ({ env }) => ({
  enabled: true,
  origin: [
    // Local development
    'http://localhost:3000',
    'http://localhost:1337',
    
    // Production frontend URLs from environment variables
    env('FRONTEND_URL', 'http://localhost:3000'),
    env('VERCEL_URL') ? `https://${env('VERCEL_URL')}` : null,
    
    // Fallback patterns for Vercel
    'https://*.vercel.app',
    'https://*.vercel.com',
    
    // Custom domains (add via environment variables)
    ...(env('CUSTOM_DOMAINS') ? env('CUSTOM_DOMAINS').split(',').map(domain => domain.trim()) : []),
  ].filter(Boolean), // Remove any null/undefined values
  
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  credentials: true,
  maxAge: 86400,
});
