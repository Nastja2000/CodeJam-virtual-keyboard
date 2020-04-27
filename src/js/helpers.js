function generateDomElement(element, classes = []) {
  const currentNode = document.createElement(element);
  for (let index = 0; index < classes.length; index += 1) {
    currentNode.classList.add(classes[index]);
  }
  return currentNode;
}

export default generateDomElement;
