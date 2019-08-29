describe('capitalize.js', () => {
    describe('capitalizeWord()', () => {
        it('is defined', () => {
            expect(capitalizeWord).toBeDefined()
        })

        it('capitalizes the first letter of a word', () => {
            expect(capitalizeWord('hi')).toEqual(
                'Hi'
            );
        });
    })
    
    describe('capitalize()', () => {
        it('is defined', () => {
            expect(capitalize).toBeDefined()
        })

        it('capitalizes the first letter of every word in a sentence', () => {
            expect(capitalize('hi there, how is it going?')).toEqual(
                'Hi There, How Is It Going?'
            );
        });

        it('capitalizes the first letter', () => {
            expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
                'I Love Breakfast At Bill Miller Bbq'
            );
        })
    })
})