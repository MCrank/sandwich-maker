import { calculateBread, calculateMeat, calculateCheese } from './helpers/calculations.js';

const selectBreadEvents = () => {
  const breadsRadio = document.getElementsByClassName('bread-check');
  for (let i = 0; i < breadsRadio.length; i++) {
    breadsRadio[i].addEventListener('change', () => {
      calculateBread();
    });
  }
};

const selectMeatEvents = () => {
  const meatsCheckBox = document.getElementsByClassName('meat-check');
  for (let i = 0; i < meatsCheckBox.length; i++) {
    meatsCheckBox[i].addEventListener('change', () => {
      calculateMeat();
    });
  }
};

const selectCheeseEvents = () => {
  const cheeseCheckBox = document.getElementsByClassName('cheese-check');
  for (let i = 0; i < cheeseCheckBox.length; i++) {
    cheeseCheckBox[i].addEventListener('change', () => {
      calculateCheese();
    });
  }
};

export { selectBreadEvents, selectMeatEvents, selectCheeseEvents };
