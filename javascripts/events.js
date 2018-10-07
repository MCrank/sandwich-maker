import { calculateBread } from './helpers/calculations.js';

const selectBreadEvents = () => {
  const breadsRadio = document.getElementsByClassName('bread-check');
  for (let i = 0; i < breadsRadio.length; i++) {
    breadsRadio[i].addEventListener('change', () => {
      calculateBread();
    });
  }
};

const attachEvents = () => {
  selectBreadEvents();
};

export { attachEvents };
