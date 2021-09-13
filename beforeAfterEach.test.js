const setupFirst = () => {
    console.log('setting up before test run')
}
const tearDown = () => {
    console.log('finish up after test run')
}


describe('new account creation checks', () => {
    beforeEach(() => setupFirst())
    afterEach(() => tearDown())
    
    it('new account 1 created', () => {
        const account = 'account1'
        expect(account).toBe('account1')
    });
    it('new account 2 created', () => {
        const account = 'account2'
        expect(account).toBe('account2')
    });
})