import { expect } from 'chai';
import BowlingGame from '../src/BowlingGame';

describe("BowlingGame", () => {
    
    it("Should return a score of 8 when 4 and 4 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(4);
        game.Roll(4);        

        const result = game.Score();
        expect(result).to.equal(8);
    });

    it("Should return a score of 8 when 0 and 8 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(4);
        game.Roll(4);        

        const result = game.Score();
        expect(result).to.equal(8);
    });

    it("Should return a score of 8 when 8 and 0 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(4);
        game.Roll(4);        

        const result = game.Score();
        expect(result).to.equal(8);
    });

    it("Should return a score of 20 when 4,6 | 5,0 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(4);
        game.Roll(6);
        
        game.Roll(5);
        game.Roll(0);        

        const result = game.Score();
        expect(result).to.equal(20);
    });

    it("Should return a score of 28 when 10 | 5,4 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(10);        
        
        game.Roll(5);
        game.Roll(4);        

        const result = game.Score();
        expect(result).to.equal(28);
    });
    
    it("Should throw an error when a negative roll is passed in", () => {
        const game = new BowlingGame();                
        
        expect(game.Roll(-1)).to.be.rejectedWith(Error);
        
    });

    it("Should throw an error when a roll above 10 is passed in", () => {
        const game = new BowlingGame();        
        
        expect(game.Roll(11)).to.be.rejectedWith(Error);
        
    });

    it("Should throw an error when a combined roll for a frame is above 10", () => {
        const game = new BowlingGame();        
        game.Roll(8);
        expect(game.Roll(4)).to.be.rejectedWith(Error);
        
    });
});