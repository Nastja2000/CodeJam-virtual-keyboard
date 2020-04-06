const generateDomElement = (currentNode, element, ...classes) => {
    currentNode = document.createElement(element);
    currentNode.classList.add(...classes);
    return currentNode;
}

export default generateDomElement;