const serverUrl = 'https://dev.azure.com';
const organization = '<ADO ORGANIZATION NAME>';
const project = '<ADO PROJECT NAME WITH WORKITEMS>';
const apiVersion = '5.1';

module.exports.wiqlUrl = () => `${serverUrl}/${organization}/${project}/_apis/wit/wiql?api-version=${apiVersion}`;
module.exports.workItemUrl = id => `${serverUrl}/${organization}/${project}/_apis/wit/workitems/${id}?api-version=${apiVersion}`;
