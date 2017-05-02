var insertionsort = require("../insertionsort");

var chai = require("chai");
var expect = chai.expect;

describe ("insertionsort", function(){
    it("empty array", function(){
        expect(insertionsort([])).to.equal("Empty Array");
    });
    
    it("simple array", function(){
        expect(insertionsort([1,2,3,4,0])).to.eql([0,1,2,3,4]);
        expect(insertionsort([3,2,1])).to.eql([1,2,3]);
        expect(insertionsort([3,2,1,8,7,0,5,4,6])).to.eql([0,1,2,3,4,5,6,7,8]);
    });
    
});