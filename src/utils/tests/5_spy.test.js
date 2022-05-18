import { getRandomDose } from '../random.js';
import Calc from '../calc.js'


// CREATE MOCK OBJECT 

// jest.mock('../calc.js');
// Calc.random = jest.fn();
// const spyMathRandom = jest.spyOn(Calc, 'random');
// const spyMathRandom = jest.spyOn(Calc, 'random').mockImplementation(() => 9);
// etc.

describe('create mock', () => {
    // MOCK RETURN VELUES
    test('should set mockReturnValue for getRandomDose', () => {
        const spyMathRandom = jest.spyOn(Calc, 'random');

        spyMathRandom.mockReturnValueOnce(5);
        spyMathRandom.mockReturnValue(9);
        // in case of promise response use mockFn.mockResolvedValue/mockFn.mockResolvedValueOnce or mockFn.mockRejectedValue/mockFn.mockRejectedValueOnce
        expect(spyMathRandom()).toBe(5);
        expect(spyMathRandom()).toBe(9);
        expect(spyMathRandom()).toBe(9);
    
        const dose = getRandomDose(5);
    
        expect(spyMathRandom).toHaveBeenCalledTimes(4)
        expect(dose).toBe(45)
    });

    test('should check Calc.random mock props and methods', () => {
        const spyMathRandom = jest.spyOn(Calc, 'random').mockImplementation((n) => n + 1);

        const i = 5;

        getRandomDose(i);
        getRandomDose(i); 
        
        // PROPERTIES
        // The function was called exactly once
        expect(spyMathRandom.mock.calls.length).toBe(2);

        // The first arg of the first call to the function was 'first arg'
        expect(spyMathRandom.mock.calls[0][0]).toBe(5);

        // This function was instantiated exactly twice
        expect(spyMathRandom.mock.instances.length).toBe(2);

        
        // METHODS
        // clears all properties
        spyMathRandom.mockClear();
        expect(spyMathRandom.mock.calls.length).toBe(0);

        getRandomDose(i);

        // clears all properties, return value and implementation
        spyMathRandom.mockReset();
        expect(spyMathRandom.mock.calls.length).toBe(0);

        // returns original implementation. NOTE: just for mockes created trough spyOn!
        // spyMathRandom.mockRestore();
        expect(spyMathRandom()).toBe(undefined);
        // expect(Number.isInteger(Calc.random())).toBe(true);
    });
});