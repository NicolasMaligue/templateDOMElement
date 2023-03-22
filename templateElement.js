/**
 * 
 * @param {String} element_name 
 * @param {String} text 
 * @param {DOMElement} parent 
 * @param {Object} attribute 
 * @returns 
 */

const templateElement = (tag_name, text, parent, attribute) => {
  const template = document.createElement(tag_name);
  text ? template.textContent = text : "";
  parent ? parent.appendChild(template) : "";
  !attribute ? "" : attribute.length > 1 ? attribute.forEach(attr => template.setAttribute(attr.name, attr.value)) : template.setAttribute(attribute.name, attribute.value);
  return template;
}