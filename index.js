
function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) { 
    return collection[linkedList];
}

function next(head, collection) {
    let nextNode = head.next;
    return collection[`${nextNode}`];
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }

function nodeAt(idx, linkedList, collection) {
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < idx; i++) {
        currentNode = next(currentNode, collection);
    }
    return currentNode
}

function addressAt(idx, linkedList, collection) {
    if (idx === 0) {
        return linkedList;
    } else { 
        let node = nodeAt(idx-1, linkedList, collection);
        return node.next;
    }
}
