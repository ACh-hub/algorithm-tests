describe('vowels.js', () => {
    describe('vowels()', () => {
        it('is defined', () => {
            expect(vowels).toBeDefined();
        })
        it('"hello" output is 2"', () => {
            expect(vowels('hello')).toEqual(2);
        });

        it('"Whoa! Hi!" is 3', () => {
            expect(vowels('Whoa! Hi!')).toEqual(3);
        });

        it('"One One" is 4', () => {
            expect(vowels('One One')).toEqual(4);
        });

        it('"A tree, a life, a bench" is 8', () => {
            expect(
                vowels('A tree, a life, a bench')).toEqual(8);
        })
    })
})