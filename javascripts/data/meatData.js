function requestData() {
  const data = JSON.parse(this.responseText);
  console.log('Meats: ', data.meats);
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
}
function dataLoadError() {
  console.log('Stuff broke');
}
const getMeatDB = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/meat.json');
  myRequest.send();
};

export { getMeatDB };
