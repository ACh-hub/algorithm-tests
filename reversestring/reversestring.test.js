describe('reversestring.js',function(){
    it('reverseString should be defined',function(){
        expect(reverseString).toBeDefined();
    })

    it('should revert the string',function(){
        expect(reverseString('apple')).toBe('elppa');
        expect(reverseString('Howdy')).toBe('ydwoH');
        expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
        expect(reverseString('')).toBe('');
    })
    
})