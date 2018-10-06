import { getBreadDB } from '../data/breadData.js';
import { getCheeseDB } from '../data/cheeseData.js';
import { getCondimentsDB } from '../data/condimentsData.js';
import { getMeatDB } from '../data/meatData.js';
import { getVeggiesDB } from '../data/veggiesData.js';

const loadData = () => {
  getBreadDB();
  getCheeseDB();
  getCondimentsDB();
  getMeatDB();
  getVeggiesDB();
};

export { loadData };
