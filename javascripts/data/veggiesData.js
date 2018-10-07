import { setMyVeggies, getMyVeggies, veggieListBuilder } from '../components/veggies.js';
import { selectVeggieEvents } from '../events.js';

function requestData() {
  const data = JSON.parse(this.responseText);
  setMyVeggies(data.veggies);
  veggieListBuilder(getMyVeggies());
  selectVeggieEvents();
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
}
function dataLoadError() {
  console.log('Stuff broke');
}
const getVeggiesDB = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/veggies.json');
  myRequest.send();
};

export { getVeggiesDB };
