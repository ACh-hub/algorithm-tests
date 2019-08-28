describe('fizzbuzz.js', function(){
    describe('fizzbuzz()', function(){
        beforeEach(function(){
            spyOn(window.console,'log')
        })

        it('is defined', function(){
            expect(fizzbuzz).toBeDefined();
        })

        it('prints 5 results for input 5',function(){
            fizzbuzz(5);
            expect(window.console.log.calls.count()).toEqual(5);
        })

        it('prints correct values for input 15', function(){
            fizzbuzz(15);
  
            expect(window.console.log.calls.argsFor(0)[0]).toEqual(1);
            expect(window.console.log.calls.argsFor(1)[0]).toEqual(2);
            expect(window.console.log.calls.argsFor(2)[0]).toEqual('fizz');
            expect(window.console.log.calls.argsFor(3)[0]).toEqual(4);
            expect(window.console.log.calls.argsFor(4)[0]).toEqual('buzz');
            expect(window.console.log.calls.argsFor(5)[0]).toEqual('fizz');
            expect(window.console.log.calls.argsFor(6)[0]).toEqual(7);
            expect(window.console.log.calls.argsFor(7)[0]).toEqual(8);
            expect(window.console.log.calls.argsFor(8)[0]).toEqual('fizz');
            expect(window.console.log.calls.argsFor(9)[0]).toEqual('buzz');
            expect(window.console.log.calls.argsFor(10)[0]).toEqual(11);
            expect(window.console.log.calls.argsFor(11)[0]).toEqual('fizz');
            expect(window.console.log.calls.argsFor(12)[0]).toEqual(13);
            expect(window.console.log.calls.argsFor(13)[0]).toEqual(14);
            expect(window.console.log.calls.argsFor(14)[0]).toEqual('fizzbuzz');
        })
    })
})
