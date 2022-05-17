import dummy_answer from './dummy/dummy_answer.json';

// CREATE MOCK

jest.mock('axios', () => {
    return {
        __esModule: true,
        // all module
        // default: jest.fn(() => 42), 
        // or
        ...jest.requireActual('axios'),
        
        // certain method
        get: jest.fn(() => 142),
      };
});


describe('create implementation', () => {
    // const API_URL = process.env.REACT_APP_API_URL;

    test('1 way: should return mocked axios in ESModule style', async () => {
        const axios = await import('axios');
        // expect(axios.default()).toBe(42)
        expect(axios.get()).toBe(142)
    });

    test('2 way: should return mocked axios in ESModule style 2', async () => {
        /* await import('axios')
        .then((axios) => {
            // expect(module.default()).toBe(42)
            expect(axios.get()).toBe(142);
        }); */
    });
    
    test('3 way: should return mocked axios in CommonJS style', () => {
        /* const module = require('axios').get;
        expect(module()).toBe(142) */
    })

    test('4 way: should overwrite axios.get implementation in the test', async () => {
        /* const axios = require('axios');
        axios.get = jest.fn(() => dummy_answer);        
        expect(axios.get()).toEqual(dummy_answer); */
    })
})