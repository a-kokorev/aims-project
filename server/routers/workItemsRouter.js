const express = require('express');
const workItemsService = require('../services/workItemsService');

const router = express.Router();

router.get('/', (_, res) => {
  workItemsService.getWorkItemsInfo()
    .then(workItemsInfo => res.json(workItemsInfo))
    .catch(error => res.send(error));
});

router.get('/:workItemId', (req, res) => {
  workItemsService.getWorkItemById(req.params.workItemId)
    .then(workItemInfo => res.json(workItemInfo))
    .catch(error => res.send(error));
});

module.exports = router;
