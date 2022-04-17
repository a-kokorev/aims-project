export interface AdoUser {
  id: string, // GUID
  displayName: string,
  uniqueName: string,
  imageUrl: string,
}

export interface WorkItem {
  id: number,
  type: string, // Enum: Objective, Key Result
  state: string, // Enum: New, In Progress, Done, Removed
  title: string,
  createdDate: Date,
  url: string,
  assignedTo: AdoUser,
  _links: object,
}
