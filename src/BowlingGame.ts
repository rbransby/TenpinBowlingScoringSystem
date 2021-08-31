export default class BowlingGame
{
    private _frames: Frame[] = [];

    public Roll(noOfPins :number): void 
    {
        let currentFrame : Frame;
        if (this._frames.length === 0 || !this._frames[this._frames.length].SecondRoll)
        {

        }
    }

    public Score() : number {
        return 0;
    }
}

class Frame 
{
    FirstRoll?: number;
    SecondRoll?: number;
}

class LastFrame 
{
    FirstRoll?: number;
    SecondRoll?: number;
    ThirdRoll?: number;
}