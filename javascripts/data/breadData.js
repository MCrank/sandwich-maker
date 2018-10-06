import { setMyBreads, getMyBreads, breadListBuilder } from '../components/bread.js';
function requestData() {
  const data = JSON.parse(this.responseText);
  // console.log('Bread: ', data.breads);
  setMyBreads(data.breads);
  breadListBuilder(getMyBreads());
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
}
function dataLoadError() {
  console.log('Stuff broke');
}
const getBreadDB = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/bread.json');
  myRequest.send();
};

export { getBreadDB };
