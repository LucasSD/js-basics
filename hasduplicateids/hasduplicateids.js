function hasDuplicateIds(root, idSet = new Set()) {
  if (!root) { return false; }

  if (root.id) {
    if (idSet.has(root.id)) {
      return true;
    }
    idSet.add(root.id);
  }

  if (root.hasChildNodes()) {
    for (let child of root.children) {
      if (hasDuplicateIds(child, idSet)) {
        return true;
      }
    }
  }
  return false;
}

// simpler solution without recursion
// function hasDuplicateIds(root, idSet = new Set()) {
//   if (!root) {
//     return false;
//   }
//
//   const allElements = root.querySelectorAll('*'); // Select elements within the root
//
//   for (const el of allElements) {
//     if (el.id && idSet.has(el.id)) {
//       return true;
//     }
//     if (el.id) {
//       idSet.add(el.id);
//     }
//   }
//   return false;
// }


module.exports = hasDuplicateIds;
