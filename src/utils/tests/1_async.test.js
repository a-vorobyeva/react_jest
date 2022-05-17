import { getAnswer } from '../api';

describe('api', () => {
    const answer = 'yes';

    test('async getAnswer should have fields', async () => {
        const data = await getAnswer(answer);
        
        expect(data).toHaveProperty('answer');
        expect(data).toHaveProperty('forced');
        expect(data).toHaveProperty('image');
    })
    
    test('promise getAnswer should have fields', () => {
        return getAnswer(answer)
        .then((data) => {
            expect(data).toHaveProperty('answer');
            expect(data).toHaveProperty('forced');
            expect(data).toHaveProperty('image');
        })
    })
    
    test('promise Jest style getAnswer should have field', () => {
        return expect(getAnswer(answer)).resolves.toHaveProperty('answer');
    })
})
