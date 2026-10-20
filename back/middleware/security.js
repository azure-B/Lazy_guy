import cors from 'cors';
import helmet from 'helmet';

/** Parse CORS_ORIGIN as a comma-separated allowlist. Fail closed in production. */
export function buildCorsMiddleware() {
  const raw = process.env.CORS_ORIGIN || '';
  const allowlist = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const isProd = process.env.NODE_ENV === 'production';

  return cors({
    origin(origin, callback) {
      // Non-browser or same-origin tools may send no Origin
      if (!origin) {
        return callback(null, !isProd);
      }
      if (allowlist.includes(origin)) {
        return callback(null, true);
      }
      if (!isProd && allowlist.length === 0) {
        // Local default: allow Vite when CORS_ORIGIN unset
        if (origin === 'http://localhost:5173') {
          return callback(null, true);
        }
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  });
}

export function securityHeaders() {
  return helmet({
    contentSecurityPolicy: false, // API-only; enable if serving HTML from Express
  });
}

/** Hide stack traces in production. */
export function safeErrorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const isProd = process.env.NODE_ENV === 'production';
  res.status(status).json({
    ok: false,
    error: isProd && status >= 500 ? 'Internal server error' : err.message,
  });
}
