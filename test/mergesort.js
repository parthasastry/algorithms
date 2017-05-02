var mergesort = require("../mergesort");

var chai = require("chai");
var expect = chai.expect;

describe ("merge", function(){
    it("empty array", function(){
        expect(mergesort([])).to.equal("Empty Array");
    });
    
    it("simple array", function(){
        expect(mergesort([3,2,1],0,2)).to.eql([1,2,3]);
        expect(mergesort([3,2,1,8,7,0,5,4,6],0,8)).to.eql([0,1,2,3,4,5,6,7,8]);
    });
    
});