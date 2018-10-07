import { setMyVeggies, getMyVeggies, veggieListBuilder } from '../components/veggies.js';

function requestData() {
  const data = JSON.parse(this.responseText);
  // console.log('Veggies: ', data.veggies);
  setMyVeggies(data.veggies);
  veggieListBuilder(getMyVeggies());
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
