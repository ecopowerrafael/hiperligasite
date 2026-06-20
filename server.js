import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Default to port 3000, but allow environment override for general node hosting providers
const PORT = process.env.PORT || 3000;

// Serve static assets from the Vite build output folder ('dist')
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Handle client-side routing by returning index.html for any unhandled routes
// This excludes the /loja subpath so that external reverse proxies or web servers can handle the WordPress installation.
app.get('*', (req, res, next) => {
  const normalizedPath = req.path.toLowerCase();
  if (normalizedPath === '/loja' || normalizedPath.startsWith('/loja/')) {
    return next(); // Let it fall through, allowing the parent web server (Nginx/Apache) to intercept and run WordPress
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js Production Server running on port ${PORT}`);
});
