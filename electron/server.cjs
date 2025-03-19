const express = require('express');
const path = require('path');
const { promises: fs } = require('fs');

const CSP_HEADER = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data: https:;
  connect-src 'self' https: ws: wss:;
  media-src 'self' https:;
  object-src 'none';
  child-src 'none';
  frame-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`.replace(/\s+/g, ' ').trim();

async function createServer(isDev) {
  try {
    const app = express();
    let server;

    // Add security headers
    app.use((req, res, next) => {
      res.setHeader('Content-Security-Policy', CSP_HEADER);
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Referrer-Policy', 'no-referrer');
      next();
    });

    if (isDev) {
      // In development, proxy to Vite dev server
      const { createServer: createViteServer } = require('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        configFile: path.join(__dirname, '../vite.config.ts')
      });

      app.use(vite.middlewares);
    } else {
      // In production, serve static files from the dist directory
      const distPath = path.join(__dirname, '../dist');
      app.use(express.static(distPath));
      
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }

    return new Promise((resolve, reject) => {
      server = app.listen(5173, () => {
        console.log(`Server running on port 5173 (${isDev ? 'development' : 'production'} mode)`);
        resolve(server);
      });

      server.on('error', (err) => {
        console.error('Server error:', err);
        reject(err);
      });
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    throw err;
  }
}

module.exports = { createServer }; 