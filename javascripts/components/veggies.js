import { printToDom } from '../helpers/utils.js';

let myVeggies = [];

const setMyVeggies = (newArray) => {
  myVeggies = newArray;
};

const getMyVeggies = () => {
  return myVeggies;
};

const veggieListBuilder = (veggieArray) => {
  let newString = '';
  veggieArray.forEach((veggie) => {
    newString += `<div class="veggie-check form-check">
        <input class="form-check-input" type="checkbox" value="${veggie.name}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
            ${veggie.name} ($${veggie.price})
        </label>
    </div>`;
  });
  printToDom(newString, 'veggie-content');
};

export { setMyVeggies, getMyVeggies, veggieListBuilder };
