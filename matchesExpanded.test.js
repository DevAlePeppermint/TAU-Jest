const multiply = require ('./multiply');
describe('String Test Matchers', () => {
    test('To Match', () => {
        expect('Liverpool').toMatch(/pool/)
    });
})

describe('Number Test Matchers', () => {
    it ('To Be Grater than', () => {
        expect(multiply(3,2)).toBeGreaterThan(5)
    })
    it ('To Be Less Than', () => {
        expect(multiply(3,2)).toBeLessThan(7)
    })
    it ('To Be Less Than or Equal', () => {
        expect(multiply(3,2)).toBeLessThanOrEqual(6)
    });
});

describe('Truthiness Test Matechers', () => {
    test('Varius', ()=>{
        const nula = null
        expect(nula).toBeNull();
        expect(nula).toBeDefined();
        expect(nula).not.toBeUndefined();
        expect(nula).not.toBeTruthy();
        expect(nula).toBeFalsy();
    })
})

describe('Array Matchers Test', () => {
    const carStock = ['BMW', 'Mercedes', 'Ferrari', 'Toyota']
    it('that the car stock list has a Ferrari', () => {
        expect(carStock).toContain('Ferrari');
    })
    it('that the car stock list hasant a Fusca', () => {
        expect(carStock).not.toContain('Fusca');
    })
})







