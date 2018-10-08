import {
  calculateBread,
  calculateMeat,
  calculateCheese,
  calculateCondiments,
  calculateVeggies
} from './helpers/calculations.js';

// import {} from './components/';

const selectBreadEvents = () => {
  const breadsRadio = document.getElementsByClassName('bread-check');
  for (let i = 0; i < breadsRadio.length; i++) {
    breadsRadio[i].addEventListener('change', (e) => {
      const selectedBread = e.target.value;
      console.log(selectedBread);
      calculateBread(selectedBread);
    });
  }
};

// Get list of all selected meats and pass to calculateMeat
const selectMeatEvents = () => {
  const meatsCheckBox = document.getElementsByClassName('meat-check');
  for (let i = 0; i < meatsCheckBox.length; i++) {
    meatsCheckBox[i].addEventListener('change', (e) => {
      calculateMeat(getCheckedBoxes('meat-checks'));
    });
  }
};

const selectCheeseEvents = () => {
  const cheeseCheckBox = document.getElementsByClassName('cheese-check');
  for (let i = 0; i < cheeseCheckBox.length; i++) {
    cheeseCheckBox[i].addEventListener('change', (e) => {
      calculateCheese();
    });
  }
};

const selectCondimentEvents = () => {
  const condimentCheckBox = document.getElementsByClassName('condiment-check');
  for (let i = 0; i < condimentCheckBox.length; i++) {
    condimentCheckBox[i].addEventListener('change', (e) => {
      calculateCondiments();
    });
  }
};

const selectVeggieEvents = () => {
  const veggieCheckBox = document.getElementsByClassName('veggie-check');
  for (let i = 0; i < veggieCheckBox.length; i++) {
    veggieCheckBox[i].addEventListener('change', (e) => {
      calculateVeggies();
    });
  }
};

const getCheckedBoxes = (sammichPart) => {
  const checkBoxes = document.getElementsByClassName(sammichPart);
  let checkedBoxes = [];
  for (let i = 0; i < checkBoxes.length; i++) {
    const element = checkBoxes[i];
    if (element.checked) {
      checkedBoxes.push(element.value);
    }
  }
  return checkedBoxes;
};

export { selectBreadEvents, selectMeatEvents, selectCheeseEvents, selectCondimentEvents, selectVeggieEvents };
