import { getAnswer } from '../api';

describe('api', () => {
    test('async getAnswer should have fields', async () => {
        const data = await getAnswer();
        
        expect(data).toHaveProperty('answer');
        expect(data).toHaveProperty('forced');
        expect(data).toHaveProperty('image');
    })
    
    test('promise getAnswer should have fields', () => {
        return getAnswer()
        .then((data) => {
            expect(data).toHaveProperty('answer');
            expect(data).toHaveProperty('forced');
            expect(data).toHaveProperty('image');
        })
    })
    
    test('promise Jest style getAnswer should have field', () => {
        return expect(getAnswer()).resolves.toHaveProperty('answer');
    })
})
