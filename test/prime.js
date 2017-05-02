var prime = require("../prime");

var chai = require("chai");
var expect = chai.expect;

describe ("prime", function(){
    it("empty array", function(){
        expect(prime([], 2)).to.equal("Empty Array");
    });
    
    it("matching value", function(){
        expect(prime([2, 3, 5, 7], 5)).to.equal(2);
        expect(prime([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 67)).to.equal(18);
    });
    
    it("not in array", function(){
        expect(prime([2, 3, 5, 7], 9)).to.equal(-1);
        expect(prime([2, 3, 5, 7], -1)).to.equal(-1);
        expect(prime([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 74)).to.equal(-1);
    });
    
});