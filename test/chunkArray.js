var chunkArray = require("../chunkArray");

var chai = require("chai");
var expect = chai.expect;

describe ("chunkArray", function(){
    
    it("case 1", function(){
       expect(chunkArray(["a", "b", "c", "d"], 2)).to.eql([["a", "b"], ["c", "d"]]);
    });
     it("case 2", function(){
       expect(chunkArray([0, 1, 2, 3, 4, 5], 3)).to.eql([[0, 1, 2], [3, 4, 5]]); 
       expect(chunkArray([0, 1, 2, 3, 4, 5], 2)).to.eql([[0, 1], [2, 3], [4, 5]]);
       expect(chunkArray([0, 1, 2, 3, 4, 5], 4)).to.eql([[0, 1, 2, 3], [4, 5]]);
       expect(chunkArray([0, 1, 2, 3, 4, 5, 6], 3)).to.eql([[0, 1, 2], [3, 4, 5], [6]]); 
       expect(chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).to.eql([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
       expect(chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).to.eql([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    });
});