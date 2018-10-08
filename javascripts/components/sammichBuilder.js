import { printToDom } from '../helpers/utils.js';

const buildBread = (bread) => {
  let newString = '';
  for (let i = 0; i < bread.length; i++) {
    newString += `<ul>
        <li>${bread[i].name}<span class="ml-3">$${bread[i].price}</span></li>
    </ul>`;
  }
  printToDom(newString, 'selected-bread');
};

const sammichBuilder = (mySammich, part) => {
  let newString = '';
  switch (part) {
    case 'bread':
      buildBread(mySammich.bread);
      break;
    case 'meat':
      buildMeat(mySammich.meat);

    default:
      break;
  }
  for (let i = 0; i < mySammich.length; i++) {
    const element = mySammich[i];
    newString += ``;

    newString += ``;
  }
};

export { sammichBuilder };
