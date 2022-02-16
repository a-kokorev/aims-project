module.exports.transformWorkItem = workItem => ({
  id: workItem.id,
  type: workItem.fields['System.WorkItemType'],
  state: workItem.fields['System.State'],
  title: workItem.fields['System.Title'],
  createdDate: new Date(workItem.fields['System.CreatedDate']),
  url: workItem.url,
  assignedTo: {
    id: workItem.fields['System.AssignedTo'].id,
    displayName: workItem.fields['System.AssignedTo'].displayName,
    uniqueName: workItem.fields['System.AssignedTo'].uniqueName,
    imageUrl: workItem.fields['System.AssignedTo'].imageUrl,
  },
  _links: workItem._links,
});
