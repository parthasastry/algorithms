var whatIsInAName = require("../whatIsInAName");

var chai = require("chai");
var expect = chai.expect;

describe ("whatIsInAName", function(){
    
    it("case 1", function(){
      expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).to.eql([{ first: "Tybalt", last: "Capulet" }]);
    });
    
     it("case 2", function(){
      expect(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })).to.eql([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
    });
   
   it("case 3", function(){
      expect(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })).to.eql([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
    });
    
    it("case 4", function(){
      expect(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })).to.eql([{ "a": 1, "b": 2, "c": 2 }]);
    });
});














