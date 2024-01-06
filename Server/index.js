const express = require('express');
const bodyParser = require('body-parser');
const server = require('./src/server');

const app = express();

// Parse JSON
app.use(bodyParser.json());

// Log middleware for debugging (opcional)
app.use((req, res, next) => {
  console.log('Incoming Request Body:', req.body);
  next();
});

// Use your server routes
app.use('/', server);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor levantado con éxito en el puerto ${port}`);
});
