import { calculateBread, calculateMeat } from './helpers/calculations.js';

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

export { selectBreadEvents, selectMeatEvents };
