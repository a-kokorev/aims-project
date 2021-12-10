const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const printTree = require('print-tree');
const treeBuilder = require('./utils/treeBuilder');
const inquireService = require('./services/inquireService');
const workItemsService = require('./services/workItemsService');

clear();

console.log(chalk.yellow(figlet.textSync('Aims Project', { horizontalLayout: 'full' })));

const displayData = workItemsTree => {
  for (const tree of workItemsTree) {
    printTree(tree, node => `${node.id} _ ${node.title}`, node => node.children);
  }
}

const run = () => {
  inquireService.askAzureDevopsToken()
    .then(() => workItemsService.getWorkItemsInfo())
    .then(workItemsInfo => workItemsService.getWorkItemRelations(workItemsInfo))
    .then(workItemsRelations => treeBuilder.buildTree(workItemsRelations))
    .then(workItemsTree => displayData(workItemsTree));
};

run();
