const setup = () => {
    console.log('setting up before test run (Before All)')
}
const tearDown = () => {
    console.log('finish up after test run (After All)')
}
const setupEach = () => {
    console.log('setting up before test run (Before Each)')
}
const tearDownEach = () => {
    console.log('finish up after test run (After Each)')
}


describe('new account creation checks', () => {
    beforeEach(() => setupEach())
    afterEach(() => tearDownEach())
    beforeAll(() => setup())
    afterAll(() => tearDown())
    
    it('new account 1 created', () => {
        const account = 'account1'
        expect(account).toBe('account1')
    });
    it('new account 2 created', () => {
        const account = 'account2'
        expect(account).toBe('account2')
    });
})