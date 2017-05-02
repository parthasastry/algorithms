var titleCase = require("../titleCase");

var chai = require("chai");
var expect = chai.expect;

describe ("titleCase", function(){
    
    it("positive", function(){
       expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
       expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");
       expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");
    });
    
});