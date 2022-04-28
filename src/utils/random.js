import Calc from './calc.js'

export const randomDose = (dose) => {
    const result = dose * Calc.random();
    
    return result;
  }