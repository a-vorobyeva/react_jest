import { getRandomAnswer } from '../api';
import dummy_answer from './dummy/dummy_answer.json'
// import axios from 'axios';

/* 
SIMPLE EXAMPLE OF MOCK CREATION

-module is mocked in the whole file (even if if is mocked inside the test)
-hoists mocked module before all imports: jest.doMock() dosen't hoist the module
*/

jest.mock('axios');

// axios.get = jest.fn();
// const spyAxios = jest.spyOn(axios, 'get');

test('should mock getRandomAnswer', async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const axios = await import('axios');

    // simple overwrite the method of module
    axios.get.mockReturnValue(dummy_answer);
    

    const data = await getRandomAnswer(API_URL);

    for (let k of Object.keys(dummy_answer.data)) {
        expect(data).toHaveProperty(k);
    }

    expect(data.answer).toEqual(dummy_answer.data.answer)
    expect(data.forced).toEqual(dummy_answer.data.forced)
    expect(data.forced).toEqual(dummy_answer.data.forced)
}); 