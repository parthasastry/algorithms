var merge = require("../merge");

var chai = require("chai");
var expect = chai.expect;

describe ("merge", function(){
    it("empty array", function(){
        expect(merge([])).to.equal("Empty Array");
    });
    
    it("simple array", function(){
       expect(merge([3, 7, 12, 14, 2, 6, 9, 11],0,3,7)).to.eql([2, 3, 6, 7, 9, 11, 12, 14]); 
    });expect(merge([0, 7, 12, 14, -1, 6, 9, 11],0,3,7)).to.eql([-1, 0, 6, 7, 9, 11, 12, 14]);
    
});