module.exports.buildTree = workItemsRelations => {
  const tree = [];
  const mappedArr = {};

  for(let i = 0; i < workItemsRelations.length; i++) {
    const arrElem = workItemsRelations[i];

    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id].children = [];
  }


  for (const id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      const mappedElem = mappedArr[id];

      if (mappedElem.parentId !== null) {
        mappedArr[mappedElem.parentId].children.push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}
