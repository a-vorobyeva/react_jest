import { randomDose } from '../random.js';
import Calc from '../calc.js'


// CREATE MOCK OBJECT 
// NOTE: all mocks still return undefined

// Calc.random = jest.fn();
// jest.mock('../calc.js');
const spyMathRandom = jest.spyOn(Calc, 'random');

describe('create mock', () => {
    test('should check Calc.random mock props and methods', () => {
        const i = 5;
        randomDose(i); // returns NaN
        randomDose(i); 
        
        // PROPERTIES
        // The function was called exactly once
        expect(spyMathRandom.mock.calls.length).toBe(2);

        // The first arg of the first call to the function was 'first arg'
        expect(spyMathRandom.mock.calls[0][0]).toBe(undefined);

        // This function was instantiated exactly twice
        expect(spyMathRandom.mock.instances.length).toBe(2);

        
        // METHODS
        // clears all properties
        spyMathRandom.mockClear();
        expect(spyMathRandom.mock.calls.length).toBe(0);

        randomDose(i);

        // clears all properties, return value and implementation
        spyMathRandom.mockReset();
        expect(spyMathRandom.mock.calls.length).toBe(0);

        // returns original implementation. NOTE: just for mockes created trough spyOn!
        // spyMathRandom.mockRestore();
        expect(spyMathRandom()).toBe(undefined);
        // expect(Number.isInteger(Calc.random())).toBe(true);
    });
})


// MOCK RETURN VELUES
describe('mock return value', () => {
  test('randomDose should return 45', () => {
    spyMathRandom.mockReturnValueOnce(5);
    spyMathRandom.mockReturnValue(9);
    // in case of promise response use mockFn.mockResolvedValue/mockFn.mockResolvedValueOnce or mockFn.mockRejectedValue/mockFn.mockRejectedValueOnce
    expect(spyMathRandom()).toBe(5);
    expect(spyMathRandom()).toBe(9);

    const dose = randomDose(5);

    expect(spyMathRandom).toHaveBeenCalledTimes(3)
    expect(dose).toBe(45)
    })
})