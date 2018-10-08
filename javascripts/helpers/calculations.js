import { printToDom } from './utils.js';
import { getMyBreads } from '../components/bread.js';
import { getMyMeats } from '../components/meat.js';
import { getMyCheeses } from '../components/cheese.js';
import { getMyCondiments } from '../components/condiments.js';
import { getMyVeggies } from '../components/veggies.js';
import { sammichBuilder } from '../components/sammichBuilder.js';

let mySammich = {
  bread: [],
  meat: [],
  cheese: [],
  condiments: [],
  veggies: []
};

const calculateBread = (selectedBread) => {
  // Get array of breads and populate mySammich.bread.  Use .splice and spread operator (...) to replace existing .breads array
  mySammich.bread.splice(0, mySammich.bread.length, ...getMyBreads().filter((x) => x.name === selectedBread));
  console.log(mySammich.bread[0]);
  sammichBuilder(mySammich, 'bread');
};

const calculateMeat = (selectedMeat) => {
  let mySelectedMeat = [];
  const myMeats = getMyMeats();
  selectedMeat.forEach((meat) => {
    mySelectedMeat.push(myMeats.find((x) => x.name === meat));
  });
  mySammich.meat.splice(0, mySammich.meat.length, ...mySelectedMeat);
  sammichBuilder(mySammich, 'meat');
};

const calculateCheese = () => {
  console.log('Calculate Cheese Here');
};

const calculateCondiments = () => {
  console.log('Calculate Condiments Here');
};

const calculateVeggies = () => {
  console.log('Calcualte Veggies Here');
};

export { calculateBread, calculateMeat, calculateCheese, calculateCondiments, calculateVeggies };
