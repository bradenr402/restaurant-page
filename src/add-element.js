export default function addElement(elementTag, textContent) {
  const element = document.createElement(elementTag);
  const elementContent = document.createTextNode(textContent);
  element.appendChild(elementContent);

  return element;
}
