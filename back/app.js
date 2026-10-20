import 'dotenv/config';
import express from 'express';
import routes from './routes/index.js';
import {
  buildCorsMiddleware,
  safeErrorHandler,
  securityHeaders,
} from './middleware/security.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(securityHeaders());
app.use(buildCorsMiddleware());
app.use(express.json({ limit: '100kb' }));
app.use('/api', routes);
app.use(safeErrorHandler);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

export default app;
