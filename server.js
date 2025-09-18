const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const staticDir = path.join(__dirname, 'src');
// simple request logger to help debug assets being served
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const ct = res.getHeader('Content-Type') || '';
    const line = `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ${ct} ${duration}ms\n`;
    require('fs').appendFileSync('/tmp/server_requests.log', line);
  });
  next();
});

app.use(express.static(staticDir));

// endpoint to receive client-side error reports from the page
app.use(express.json({ limit: '1mb' }));
app.post('/__client_error', (req, res) => {
  try {
    const payload = { time: new Date().toISOString(), body: req.body };
    require('fs').appendFileSync('/tmp/client_errors.log', JSON.stringify(payload) + '\n');
  } catch (e) {
    // ignore
  }
  res.sendStatus(204);
});

// SPA fallback: serve index.html for any unknown route so Cypress won't get 404s
app.get('*', (req, res, next) => {
  // Don't interfere with Cypress internals or asset requests
  if (req.path.startsWith('/__cypress') || req.path.startsWith('/__') || req.path.startsWith('/cypress') || req.path.includes('.')) {
    return next();
  }
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app;
