import { printToDom } from '../helpers/utils.js';

const buildBread = (bread) => {
  let newString = '';
  for (let i = 0; i < bread.length; i++) {
    newString += `<li>${bread[i].name}<span class="ml-3">$${bread[i].price}</span></li>`;
  }
  printToDom(newString, 'selected-bread');
};

const buildMeat = (meat) => {
  let newString = '';
  for (let i = 0; i < meat.length; i++) {
    newString += `<li>${meat[i].name}<span class="ml-3">$${meat[i].price}</span></li>`;
  }
  printToDom(newString, 'selected-meat');
};

const buildCheese = (cheese) => {
  let newString = '';
  for (let i = 0; i < cheese.length; i++) {
    newString += `<li>${cheese[i].name}<span class="ml-3">$${cheese[i].price}</span></li>`;
  }
  printToDom(newString, 'selected-cheese');
};

const buildCondiments = (condiments) => {
  let newString = '';
  for (let i = 0; i < condiments.length; i++) {
    newString += `<li>${condiments[i].name}<span class="ml-3">$${condiments[i].price}</span></li>`;
  }
  printToDom(newString, 'selected-condiments');
};

const buildVeggies = (veggies) => {};

const sammichBuilder = (mySammich, part) => {
  switch (part) {
    case 'bread':
      buildBread(mySammich.bread);
      break;
    case 'meat':
      buildMeat(mySammich.meat);
      break;
    case 'cheese':
      buildCheese(mySammich.cheese);
      break;
    case 'condiments':
      buildCondiments(mySammich.condiments);
      break;
    case 'veggies':
      buildVeggies(mySammich.veggies);
      break;
    default:
      break;
  }
};

export { sammichBuilder };
