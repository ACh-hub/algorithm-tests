describe('steps.js',()=>{
    describe('steps()',()=>{
        beforeEach(()=>{
            spyOn(window.console,'log')
        })
        afterEach(()=>{
            window.console.log.calls.reset()
        })

        it('is defined',()=>{
            expect(steps).toBeDefined();
        })

        it('prints nothing for num = 0',()=>{
            steps(0)
            expect(window.console.log.calls.argsFor(0)[0]).toEqual('')
        })

        it('prints properly for num = 3',()=>{
            steps(3)
            expect(window.console.log.calls.argsFor(0)[0]).toEqual('#  ')
            expect(window.console.log.calls.argsFor(1)[0]).toEqual('## ')
            expect(window.console.log.calls.argsFor(2)[0]).toEqual('###')
        })
    })
})