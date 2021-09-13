const multiply = require ('./multiply');

describe('teste multiply positive scenarios', () => {
    it ('multiply 3 * 3 should equal to 9', () => {
        expect(multiply(3,3)).toBe(9)
        expect(multiply(3,2)).toBeGreaterThan(5)
    })
})
describe('testing a object', () => {
    it ('testing a object', () => {
        const data = {first: 1};
        data['second'] = 2;
        expect(data).toEqual({first:1, second:2});
    })
})

