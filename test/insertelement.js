var insertelement = require("../insertelement");

var chai = require("chai");
var expect = chai.expect;

describe ("insertelement", function(){
    it("empty array", function(){
        expect(insertelement([], 1,0)).to.equal("Empty Array");
    });
    
    it("insert one element", function(){
        expect(insertelement([1,2,3],2,0)).to.eql([0,1,2,3]);
        expect(insertelement([1,2,3,7,6,5],3,6)).to.eql([1,2,3,6,7,5]);
        expect(insertelement([1,2,3,6,7,5],4,5)).to.eql([1,2,3,5,6,7]);
    });
    
});