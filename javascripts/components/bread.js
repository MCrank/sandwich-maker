import { printToDom } from '../helpers/utils.js';

let myBreads = [];

const setMyBreads = (newArray) => {
  myBreads = newArray;
};

const getMyBreads = () => {
  return myBreads;
};

const breadListBuilder = (breadArray) => {
  let newString = '';
  breadArray.forEach((bread) => {
    newString += `<div class="bread-check form-check form-check">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="${bread.name}">
        <label class="form-check-label" for="inlineRadio1">${bread.name} ($${bread.price})</label>
    </div>`;
  });
  printToDom(newString, 'bread-content');
};

export { setMyBreads, getMyBreads, breadListBuilder };
