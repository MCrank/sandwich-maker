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

const calculateCheese = (selectedCheese) => {
  let mySelectedCheese = [];
  const myCheese = getMyCheeses();
  selectedCheese.forEach((cheese) => {
    mySelectedCheese.push(myCheese.find((x) => x.name === cheese));
  });
  mySammich.cheese.splice(0, mySammich.cheese.length, ...mySelectedCheese);
  sammichBuilder(mySammich, 'cheese');
};

const calculateCondiments = (selectedCondiment) => {
  let mySelectedCondiment = [];
  const myCondiment = getMyCondiments();
  selectedCondiment.forEach((condiment) => {
    mySelectedCondiment.push(myCondiment.find((x) => x.name === condiment));
  });
  mySammich.condiments.splice(0, mySammich.condiments.length, ...mySelectedCondiment);
  sammichBuilder(mySammich, 'condiments');
};

const calculateVeggies = (selectedVeggie) => {
  let mySelectedVeggie = [];
  const myVeggie = getMyVeggies();
  selectedVeggie.forEach((veggie) => {
    mySelectedVeggie.push(myVeggie.find((x) => x.name === veggie));
  });
  mySammich.veggies.splice(0, mySammich.veggies.length, ...mySelectedVeggie);
  sammichBuilder(mySammich, 'veggies');
};

export { calculateBread, calculateMeat, calculateCheese, calculateCondiments, calculateVeggies };
