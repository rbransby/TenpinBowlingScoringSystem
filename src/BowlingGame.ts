export default class BowlingGame
{
    private _frames: Frame[] = [];

    public Roll(noOfPins :number): void 
    {        
        if (noOfPins > 10 || noOfPins < 0)
        {
            throw new Error("Invalid number of pins, must be between 0 and 10");
        }

        let currentFrame = this.getCurrentFrame();
        if (this._frames.length === 10 && currentFrame?.SecondRoll !== undefined)
        {
            throw new Error("Game is complete!");
        }

        
        if (this._frames.length === 0 || currentFrame.FirstRoll === 10 || !(currentFrame.SecondRoll === undefined))
        {
            this._frames.push(new Frame(noOfPins));                        
        }        
        else
        {
            // we know that its a valid number of pins and we are on the second roll, lets see if its a valid "total" for the frame
            if (noOfPins + currentFrame.FirstRoll > 10)
            {
                throw new Error(`Invalid second roll for this frame, only ${10 - currentFrame.FirstRoll} pins remain.`);
            }

            currentFrame.SecondRoll = noOfPins;
        }        
    }

    public Score() : number {
        let score = 0;
        for (let i = 0; i < this._frames.length; i++)
        {
            const frame = this._frames[i];
            if (frame.FirstRoll === 10)
            {
                //score for this frame is 10 + the next two bowls. This has the potential to span two frames if the next bowl was also a strike.
                const nextFrame = this._frames[i+1];
                if (nextFrame && nextFrame.SecondRoll !== undefined && nextFrame.FirstRoll < 10)
                {
                    score += 10 + nextFrame.FirstRoll + nextFrame.SecondRoll;
                }
                else if (nextFrame.FirstRoll === 10)
                {
                    // get the next frame and use its FirstRoll
                    const nextNextFrame = this._frames[i+2];
                    if (nextNextFrame)
                    {
                        score += 10 + nextFrame.FirstRoll + nextNextFrame.FirstRoll;
                    }
                }
            }
            else if (frame.FirstRoll + (frame.SecondRoll ?? 0) === 10) 
            {
                const nextFrame = this._frames[i+1];
                if (nextFrame)
                {
                    score += 10 + nextFrame.FirstRoll;
                }
            }
            else
            {
                score += frame.FirstRoll + (frame.SecondRoll ?? 0);
            }
        }

        return score;
    }

    private getCurrentFrame() : Frame {
        return this._frames[this._frames.length-1]
    }
}

class Frame 
{
    constructor(noOfPins:number)
    {
        this.FirstRoll = noOfPins;
    }
    FirstRoll: number;
    SecondRoll?: number;
}

class LastFrame extends Frame
{    
    ThirdRoll?: number;
}