import { printToDom } from '../helpers/utils.js';

let myCheeses = [];

const setMyCheeses = (newArray) => {
  myCheeses = newArray;
};

const getMyCheeses = () => {
  return myCheeses;
};

const cheeseListBuilder = (cheeseArray) => {
  let newString = '';
  cheeseArray.forEach((cheese) => {
    newString += `<div class="cheese-check form-check">
    <input class="form-check-input" type="checkbox" value="${cheese.name}" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        ${cheese.name} ($${cheese.price})
    </label>
</div>`;
  });
  printToDom(newString, 'cheese-content');
};

export { setMyCheeses, getMyCheeses, cheeseListBuilder };
