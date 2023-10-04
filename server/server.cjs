const express = require('express');

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.get('/api/hello', async (_, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// Serve app production bundle
app.use(express.static('dist'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});