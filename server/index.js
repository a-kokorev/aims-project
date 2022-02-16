const express = require('express');
const workItemsService = require('./services/workItemsService');

const server = express();
const port = 3000;

server.get('/work-items', (_, res) => {
  workItemsService.getWorkItemsInfo()
    .then(workItemsInfo => res.json(workItemsInfo))
    .catch(error => res.send(error));
});

server.get('/work-items/:workItemId', (req, res) => {
  workItemsService.getWorkItemById(req.params.workItemId)
    .then(workItemInfo => res.json(workItemInfo))
    .catch(error => res.send(error));
});

server.listen(port, () => {
  console.log(`Server app is listening on port ${port}`);
});
