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

    it("Should return a score of 53 when 10 | 10 | 5,4 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(5);
        game.Roll(4);        

        const result = game.Score();
        expect(result).to.equal(53);
    });

    it("Should return a score of 53 when 10 | 5 5 | 5,5 | 4 3 are rolled", () => {
        const game = new BowlingGame();
        game.Roll(10);        
        game.Roll(5);        
        game.Roll(5);
        game.Roll(5);        
        game.Roll(5);
        game.Roll(4);        
        game.Roll(3);

        const result = game.Score();
        expect(result).to.equal(56);
    });

    it("Should return a score of 300 for a perfect game", () => {
        const game = new BowlingGame();
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        
        game.Roll(10);        

        const result = game.Score();
        expect(result).to.equal(300);
    });
    
    it("Should throw an error when a negative roll is passed in", () => {
        const game = new BowlingGame();                
        
        expect(() => game.Roll(-1)).to.throw(Error);
        
    });

    it("Should throw an error when a roll above 10 is passed in", () => {
        const game = new BowlingGame();        
        
        expect(() => game.Roll(11)).to.throw(Error);
        
    });

    it("Should throw an error when a combined roll for a frame is above 10", () => {
        const game = new BowlingGame();        
        game.Roll(8);
        expect(() => game.Roll(4)).to.throw(Error);
        
    });
    
    it("Should throw an error if you try to roll again after the game is complete", () => {
        const game = new BowlingGame();        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);
        game.Roll(4);
        
        game.Roll(4);        
        game.Roll(1);
               
        expect(() => game.Roll(4)).to.throw(Error);
    });
});