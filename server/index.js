const express = require('express');
const workItemsRouter = require('./routers/workItemsRouter');

const server = express();
const port = 3000;

server.use('/work-items', workItemsRouter);

server.listen(port, () => {
  console.log(`Server app is listening on port ${port}`);
});
