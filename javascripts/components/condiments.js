import { printToDom } from '../helpers/utils.js';

let myCondiments = [];

const setMyCondiments = (newArray) => {
  myCondiments = newArray;
};

const getMyCondiments = () => {
  return myCondiments;
};

const condimentsListBuilder = (condimentsArray) => {
  let newString = '';
  condimentsArray.forEach((condiment) => {
    newString += `<div class="condiment-check form-check">
        <input class="condiment-checks form-check-input" type="checkbox" value="${condiment.name}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
            ${condiment.name} ($${condiment.price})
        </label>
    </div>`;
  });
  printToDom(newString, 'condiment-content');
};

export { setMyCondiments, getMyCondiments, condimentsListBuilder };
