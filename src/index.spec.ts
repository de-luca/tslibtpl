import Foo from './index';

describe('Foo.bar', () => {
    it('is bar', () => {
        const f = new Foo();
        expect(f.bar()).toEqual(true);
    }); 
});
