describe('reversestring.js',function(){
    it('should be the function',function(){
        expect(typeof reverseString).toBe('function');
    })

    it('should revert the string',function(){
        expect(reverseString('apple')).toBe('elppa');
        expect(reverseString('Howdy')).toBe('ydwoH');
        expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
        expect(reverseString('')).toBe('');
    })

    it('should return string',function(){
        expect(typeof(reverseString('anything'))).toBe('string');
    })
    
})