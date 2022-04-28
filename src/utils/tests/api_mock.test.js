import fake_answer from './fake/fake_answer.json'

// CREATE MOCK OBJECT WITH IMPLEMENTATION
// 1. ESM
/* jest.mock('axios', () => {
    return {
        __esModule: true,
        // all module
        // default: jest.fn(() => 42), 
        // or
        ...jest.requireActual('axios'),
        
        // certain method
        get: jest.fn(() => 142), 
      };
}); */


/* // NOTE: jest.doMock not hoist the module
jest.doMock('path', () => ...) */

//2. OVERWRITE and 3. SPY
// Logic in the test section


describe('create implementation', () => {
    test('1 way: axios should return module mock in ESM style', async () => {
        // mocks through import exist only inside the current test
        /* await import('axios')
        .then((axios) => {
            // expect(module.default()).toBe(42)
            expect(axios.get()).toBe(142)

        }); */
    });
    
    test('1 way: axios should return module mock in ESM style 2', async () => {
        // mocks through import exist only inside the current test
        /* const axios = await import('axios')
            // expect(axios.default()).toBe(42)
            expect(axios.get()).toBe(142); */
    });

    test('1 way: axios should return module mock CommonJS style', () => {
        // mocks through require exist even inside other modules
        /* const module = require('axios').get;
        expect(module()).toBe(142) */
    })

    test('2 way: should overwrite the implementation', async () => {
        /* 
        const axios = require('axios');
        const api = require('../api.js');
        
        axios.get = jest.fn(() => fake_answer);
        expect(axios.get()).toEqual(fake_answer);

        const result = await api.getRandomAnswer();
        expect(result).toEqual(fake_answer.data); */
    })

    test('3 way: should add spyOn', async () => {
        const axios = require('axios');
        const api = require('../api.js');

        const spyFn = jest.spyOn(axios, 'get').mockImplementation(() => fake_answer);
        // or
        // const spyFn = jest.spyOn(axios, 'get').mockImplementation(() => axios.get = fake_answer);
        
        const result = await api.getRandomAnswer()
        
        expect(result).toEqual(fake_answer.data) 
        expect(spyFn).toBeCalledTimes(1) 
    })  
})

describe('2', () => {
    test('clear mock in spyOn style', () => {
        /* const spyFn = jest.spyOn(axios, 'get').mockImplementation(() => 142);
        expect(spyFn()).toBe(142);
        expect(spyFn).toHaveBeenCalledTimes(1);
        
        // clears mockFn.mock properties
        jest.clearAllMocks();
        expect(spyFn).toHaveBeenCalledTimes(0);
        
        // clears all properties, return value and implementation of all mocks (like .mockReset() on the certain mock)
        jest.resetAllMocks();
        const spyFn2 = jest.spyOn(axios, 'get').mockImplementation(() => 2);
        
        expect(spyFn2()).toBe(2);
        expect(spyFn2).toHaveBeenCalledTimes(1);
        
        // returns original implementation. (like .mockRestore(); just for spyOn implementation too)
        jest.restoreAllMocks();
        console.log('restoreAllMocks', axios); */
    });

    test('isolate module', () => {
        /* let realModule;
        jest.isolateModules(() => {
            realModule = require('axios');
            console.log('module', realModule);
        });

        let mockModule = require('axios');
        mockModule = jest.fn(() => 'overwritten module copy');

        expect(mockModule()).toBe('overwritten module copy') */
    })

    
    afterEach(() => {
        // resets the cache of all required modules. This is useful to isolate modules where local state might conflict between tests.
        // jest.resetModules();
    });
})
