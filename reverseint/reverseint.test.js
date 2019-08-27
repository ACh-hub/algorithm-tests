describe('reverseint.js',()=>{
    it('reverseInt should be defined',()=>{
        expect(reverseInt).toBeDefined();
    })

    it('reverseInt reverse positive number', ()=>{
        expect(reverseInt(5)).toBe(5);
        expect(reverseInt(15)).toBe(51);
        expect(reverseInt(90)).toBe(9);
        expect(reverseInt(2359)).toBe(9532);
    })

    it('reverseInt reverse negative number', ()=>{
        expect(reverseInt(-5)).toBe(-5);
        expect(reverseInt(-15)).toBe(-51);
        expect(reverseInt(-90)).toBe(-9);
        expect(reverseInt(-2359)).toBe(-9532);
    })
    it('reverseInt handles 0', ()=>{
        expect(reverseInt(0)).toBe(0);
    })
})