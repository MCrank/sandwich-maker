import { setMyBreads, getMyBreads, breadListBuilder } from '../components/bread.js';
import { selectBreadEvents } from '../events.js';

function requestData() {
  const data = JSON.parse(this.responseText);
  setMyBreads(data.breads);
  breadListBuilder(getMyBreads());
  selectBreadEvents();
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
