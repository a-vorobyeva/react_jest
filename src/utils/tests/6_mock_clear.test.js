import axios from 'axios';
import { getRandomAnswer } from '../api';
import dummy_answer from './dummy/dummy_answer.json';

describe('clear mocks', () => {
    test('clear mock in spyOn style', async () => {
        const spyFn = jest.spyOn(axios, 'get').mockImplementation(() => 2);

        expect(spyFn()).toBe(2);
        expect(spyFn).toHaveBeenCalledTimes(1);
        
        // clears mockFn.mock properties
        jest.clearAllMocks();
        expect(spyFn).toHaveBeenCalledTimes(0);
        
        // clears all properties, return value and implementation of all mocks (like .mockReset() on the certain mock)
        jest.resetAllMocks();

        spyFn.mockImplementation(() => dummy_answer);
        
        expect(spyFn()).toEqual(dummy_answer);
        expect(spyFn).toHaveBeenCalledTimes(1);

        const result = await getRandomAnswer();
        expect(result).toEqual(dummy_answer.data);
        expect(result).toEqual(dummy_answer.data);

        // returns original implementation (like .mockRestore(); NOTE: just for mockes created with spyOn!)
        jest.restoreAllMocks();

        // const resultOriginal = await getRandomAnswer();
        // console.log('resultOriginal', resultOriginal);
    });

    test('isolate module', () => {
        let realModule;
        
        jest.isolateModules(() => {
            realModule = require('axios');
            // console.log('module', realModule);
        });

        let mockModule = require('axios');
        mockModule = jest.fn(() => 'overwritten module copy');

        expect(mockModule()).toBe('overwritten module copy')
    })
})
