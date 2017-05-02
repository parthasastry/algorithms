var findersKeepers = require("../findersKeepers");

var chai = require("chai");
var expect = chai.expect;

describe ("findersKeepers", function(){
    
    it("case 1", function(){
      expect(findersKeepers([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).to.equal(8);
    });
    
    it("case 2", function(){
      expect(findersKeepers([1, 3, 5, 9], function(num) { return num % 2 === 0; })).to.equal(undefined);
    });
    
   
});
