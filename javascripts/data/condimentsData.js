function requestData() {
  const data = JSON.parse(this.responseText);
  console.log('Condiments: ', data.condiments);
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
}
function dataLoadError() {
  console.log('Stuff broke');
}
const getCondimentsDB = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/condiments.json');
  myRequest.send();
};

export { getCondimentsDB };
