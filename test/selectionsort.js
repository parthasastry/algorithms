var selectionsort = require("../selectionsort");

var chai = require("chai");
var expect = chai.expect;

describe ("selectionsort", function(){
    it("empty array", function(){
        expect(selectionsort([])).to.equal("Empty Array");
    });
    
    it("simple array", function(){
        expect(selectionsort([3,2,1])).to.eql([1,2,3]);
        expect(selectionsort([3,2,1,8,7,0,5,4,6])).to.eql([0,1,2,3,4,5,6,7,8]);
    });
    
});