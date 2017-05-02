var sumArr = require("../sumArr");

var chai = require("chai");
var expect = chai.expect;

describe ("sumArr", function(){
    
    it("case 1", function(){
      expect(sumArr([1, 4])).to.equal(10);
    });
    
    it("case 2", function(){
      expect(sumArr([4, 1])).to.equal(10);
    });
    
    it("case 3", function(){
      expect(sumArr([5, 10])).to.equal(45);
    });
    
     it("case 3", function(){
      expect(sumArr([10, 5])).to.equal(45);
    });
    
});