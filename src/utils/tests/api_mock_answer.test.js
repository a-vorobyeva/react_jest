import { getRandomAnswer } from '../api';
import fake_answer from './fake/fake_answer.json'

jest.mock('axios');

test('getRandomAnswer should be mocked', async () => {
    const axios = await import('axios');
    
    // mock the function even in the outer module
    axios.get.mockReturnValue(fake_answer);

    const data = await getRandomAnswer();

    for (let k of Object.keys(fake_answer.data)) {
        expect(data).toHaveProperty(k);    
    }

    expect(data.answer).toEqual(fake_answer.data.answer)
    expect(data.forced).toEqual(fake_answer.data.forced)
    expect(data.forced).toEqual(fake_answer.data.forced)
}); 
