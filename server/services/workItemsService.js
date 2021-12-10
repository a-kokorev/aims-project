const urlBuilder = require('../utils/urlBuilder');
const requestService = require('./requestService');
const inquireService = require('./inquireService');

module.exports.getWorkItemsInfo = () => {
  const filterTag = inquireService.getFilterTag();
  let query =
    "SELECT [System.Id], [System.Title] " +
    "FROM WorkItems ";

  if(filterTag) {
    query += `WHERE [System.Tags] Contains '${filterTag}'`;
  }

  return requestService.post(urlBuilder.wiqlUrl(), { query })
    .then(response => response.data.workItems)
    .then(workItems =>
      requestService.all(
        workItems.map(workItem => requestService.get(urlBuilder.workItemUrl(workItem.id)))
      )
    )
    .then(responseArray => responseArray.map(response => response.data))
    .then(workItemsInfo => workItemsInfo)
    .catch(error => console.log(error));
};

module.exports.getWorkItemRelations = workItemsInfo => {
  const filterTag = inquireService.getFilterTag();
  const query =
    "SELECT [System.Id], [System.Title] " +
    "FROM workitemLinks " +
    "WHERE [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward' " + (
      filterTag
      ? `AND [Source].[System.Tags] Contains '${filterTag}' ` +
        `AND [Target].[System.Tags] Contains '${filterTag}' `
      : ""
    ) +
    "MODE (Recursive)";

  return requestService.post(urlBuilder.wiqlUrl(), { query })
    .then(response => response.data.workItemRelations)
    .then(workItemRelations => workItemRelations.map(relation => {
      const id = relation.target.id;
      const workItemInfo = workItemsInfo.find(workItem => workItem.id === id);

      return {
        id,
        parentId: relation.source !== null ? relation.source.id : null,
        title: workItemInfo.fields["System.Title"],
      };
    }));
};
