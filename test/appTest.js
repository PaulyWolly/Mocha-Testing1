const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

// Results
let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5,5);

//Our first test
describe('App', function() {

    describe('sayHello()', function() {
        it('app should return "Hello" (capital H)', function() {
            //let result = app.sayHello();
    
            assert.equal(sayHelloResult, 'Hello'); // call as assert to equal - sayHello function expecting 'hello' as output
        });
    
        it('sayHello should return type string', function() {
            //let result = app.sayHello();
    
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    

    describe('addNumbers()', function() {
        it('addNumbers result should be above 5', function() {
            //let result = app.addNumbers(5, 5);
    
            assert.isAbove(addNumbersResult, 5);
        })
    
        it('addNumbers should return type of number', function() {
            //let result = app.addNumbers(5,5);
    
            assert.typeOf(addNumbersResult, 'number');
        });
    });
    
});