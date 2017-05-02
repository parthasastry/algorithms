var dropit = require("../dropit");

var chai = require("chai");
var expect = chai.expect;

describe ("dropit", function(){
    
    it("case 1", function(){
      expect(dropit([1, 2, 3, 4], function(n) {return n >= 3;})).to.eql([3, 4]);
    });
    it("case 2", function(){
      expect(dropit([0, 1, 0, 1], function(n) {return n === 1;})).to.eql([1, 0, 1]);
    });
    it("case 3", function(){
      expect(dropit([1, 2, 3], function(n) {return n > 0;})).to.eql([1, 2, 3]);
    });
    it("case 4", function(){
      expect(dropit([1, 2, 3, 4], function(n) {return n > 5;})).to.eql([]);
    });
    it("case 5", function(){
      expect(dropit([1, 2, 3, 7, 4], function(n) {return n > 3;})).to.eql([7, 4]);
    });
    it("case 6", function(){
      expect(dropit([1, 2, 3, 9, 2], function(n) {return n > 2;})).to.eql([3, 9, 2]);
    });
   
});