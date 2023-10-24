import _ from 'lodash';
import style from './style.css';
import myImg from './myimg.jpg';
import xmlData from './data.xml';

function component() {
  const element = document.createElement('div');

  // Lodash is now imported with script
  element.innerHTML = _.join(['hello', 'world'], '');
  element.classList.add('hello');

  const Icon = new Image();
  Icon.src = myImg;

  element.appendChild(Icon);

  console.log({ xmlData });

  return element;
}

document.body.appendChild(component());
