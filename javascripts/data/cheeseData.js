function requestData() {
  const data = JSON.parse(this.responseText);
  console.log('Cheese: ', data.cheeses);
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
}
function dataLoadError() {
  console.log('Stuff broke');
}
const getCheeseDB = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/cheese.json');
  myRequest.send();
};

export { getCheeseDB };
