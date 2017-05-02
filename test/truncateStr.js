var truncateStr = require("../truncateStr");

var chai = require("chai");
var expect = chai.expect;

describe ("truncateStr", function(){
    
    it("positive", function(){
       expect(truncateStr("A-tisket a-tasket A green and yellow basket", 11)).to.equal("A-tisket...");
       expect(truncateStr("Peter Piper picked a peck of pickled peppers", 14)).to.equal("Peter Piper...");
       expect(truncateStr("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).to.equal("A-tisket a-tasket A green and yellow basket");
       expect(truncateStr("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+2)).to.equal("A-tisket a-tasket A green and yellow basket");
       expect(truncateStr("A-", 1)).to.equal("A..."); 
       expect(truncateStr("Absolutely Longer", 2)).to.equal("Ab..."); 
        
    });
});