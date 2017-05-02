var factorial = require("../factorial");

var chai = require("chai");
var expect = chai.expect;

describe ("factorial", function(){
    it("simple condition", function(){
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
    });
    
    it("Medium condition", function(){
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
        expect(factorial(6)).to.equal(720);
    });
});