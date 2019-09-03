describe('pyramid.js',()=>{
    describe('pyramid()',()=>{
        beforeEach(()=>{
            spyOn(window.console,'log')
        })
        afterEach(()=>{
            window.console.log.calls.reset()
        })

        it('is defined',()=>{
            expect(pyramid).toBeDefined();
        })

        it('prints nothing for num = 0',()=>{
            pyramid(0)
            expect(window.console.log.calls.argsFor(0)[0]).toEqual('')
        })

        it('prints properly for num = 3',()=>{
            pyramid(3)
            expect(window.console.log.calls.argsFor(0)[0]).toEqual('  #  ')
            expect(window.console.log.calls.argsFor(1)[0]).toEqual(' ### ')
            expect(window.console.log.calls.argsFor(2)[0]).toEqual('#####')
        })
    })
})