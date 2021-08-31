# TenpinBowlingScoringSystem!

This is my solution for the DiUS Bowling code challenge.

## Developer Setup

Super simple. The solution is a basic typescript setup.

- Clone the repo
- ```npm install```
- ```npm test``` to flex the code!

The two main files to note are:
- ```src/BowlingGame.ts``` which contains the Roll() and Score() methods. Roll will add your roll to the game, it keeps track of frames as well as the final frame scenario of 3 rolls.
- ```test/bowlinggame.spec.ts``` which contains unit tests that exercise the code and present various scenarios.

Roll will throw an error if the game has already ended (i.e. 10 complete frames) or you enter invalid rolls (like less than zero, more than 10, or a frame that ends up being more than 10 pins).

Look forward to chatting about it!

