import Calc from './calc.js'

export const getRandomDose = (dose) => {
    const result = dose * Calc.random(dose);
    
    return result;
  }