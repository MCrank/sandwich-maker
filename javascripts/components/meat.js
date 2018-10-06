import { printToDom } from '../helpers/utils.js';

let myMeats = [];

const setMyMeats = (newArray) => {
  myMeats = newArray;
};

const getMyMeats = () => {
  return myMeats;
};

const meatListBuilder = (meatArray) => {
  let newString = '';
  meatArray.forEach((meat) => {
    newString += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${meat.name}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
            ${meat.name} ($${meat.price})
        </label>
    </div>`;
  });
  printToDom(newString, 'meat-content');
};

export { setMyMeats, getMyMeats, meatListBuilder };
