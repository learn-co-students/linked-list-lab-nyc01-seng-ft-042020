
function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) { 
    return collection[linkedList];
}

function next(head, collection) {
    let nextAddress = head.next;
    return collection[`${nextAddress}`];
}

function nodeAt(idx, linkedList, collection) { 

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

