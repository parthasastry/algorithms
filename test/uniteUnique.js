var uniteUnique = require("../uniteUnique");

var chai = require("chai");
var expect = chai.expect;

describe ("uniteUnique", function(){
    
    it("case 1", function(){
      expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.eql([1, 3, 2, 5, 4]);
    });
    
   it("case 2", function(){
      expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).to.eql([1, 3, 2, [5], [4]]);
    });
    
    it("case 3", function(){
      expect(uniteUnique([1, 2, 3], [5, 2, 1])).to.eql([1, 2, 3, 5]);
    });
    
    it("case 4", function(){
      expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.eql([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});














