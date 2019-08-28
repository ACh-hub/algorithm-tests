describe('palindromes.js', ()=>{
    it('palindrome should be defined',()=>{
        expect(palindrome).toBeDefined();
    })

    it('ala is a palindrome',()=>{
        expect(palindrome('ala')).toBeTruthy();
    })

    it('beret is not a palindrome',()=>{
        expect(palindrome('beret')).toBeFalsy();
    })

    it('12ab..ba21 is a palindrome',()=>{
        expect(palindrome('12ab..ba21')).toBeTruthy();
    })

    it('12$% is not a palindrome',()=>{
        expect(palindrome('12$%')).toBeFalsy();
    })
})