var largestOfFour = require("../largestOfFour");

var chai = require("chai");
var expect = chai.expect;

describe ("largestOfFour", function(){
    
    it("positive", function(){
       expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.eql([5,27,39,1001]);
       expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).to.eql([9, 35, 97, 1000000]);
    });
    
});