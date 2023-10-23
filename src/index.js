import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash is now imported with script
  element.innerHTML = _.join(['hello', 'world'], '');

  return element;
}

document.body.appendChild(component());
