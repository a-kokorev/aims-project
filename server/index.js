const express = require('express');
const workItemsRouter = require('./routers/workItemsRouter');

const server = express();
const port = 3000;

server.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

server.use('/work-items', workItemsRouter);

server.listen(port, () => {
  console.log(`Server app is listening on port ${port}`);
});
