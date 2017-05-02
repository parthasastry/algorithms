var minindex = require("../minindex");

var chai = require("chai");
var expect = chai.expect;

describe ("minindex", function(){
    it("empty array", function(){
        expect(minindex([], 0)).to.equal("Empty Array");
    });
    
    it("Small array", function(){
        expect(minindex([3,2,1], 0)).to.equal(2);
        expect(minindex([3,2,1,4,5,0], 3)).to.equal(5);
        expect(minindex([3,2,1,8,7,0,5,4,6],0)).to.equal(5)
    });
    
});