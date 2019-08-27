describe('reverseint.js',()=>{
    it('should be function',()=>{
        expect(typeof reverseInt).toBe('function');
    })

    it('should return number',()=>{
        expect(typeof reverseInt(42)).toBe('number');
    })

    it('1234 should be 4321', ()=>{
        expect(reverseInt(1234)).toBe(4321);
    })
})