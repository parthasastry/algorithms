var swap = require("../swap");

var chai = require("chai");
var expect = chai.expect;

describe ("swap", function(){
    
     it("simple swap", function(){
        expect(swap([3,2,1], 1, 2)).to.eql([3,1,2]);
        expect(swap([3,2,1], 0, 1)).to.eql([2,3,1]);
        expect(swap([4, 5, 6, 7, 8, 9], 5, 0)).to.eql([9, 5, 6, 7, 8, 4]);
    });
    
});