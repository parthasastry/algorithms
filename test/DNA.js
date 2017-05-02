var DNA = require("../DNA");

var chai = require("chai");
var expect = chai.expect;

describe ("DNA", function(){
    
    it("case 1", function(){
      expect(DNA("ATCGA")).to.eql([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
    });
    
    it("case 2", function(){
      expect(DNA("TTGAG")).to.eql([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
    });
    
    it("case 3", function(){
      expect(DNA("CTCTA")).to.eql([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
    });
});














