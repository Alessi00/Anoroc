
import { stringify } from 'querystring';

export class Itinerary 
{
    Risk: Number
    /*constructor(num:Number)
    {
        this.Risk=num;
    }*/
    getRisk():string
    {
        let out = "";
        switch(this.Risk)
        {
            case 0:
                out="No Risk";
                break;
            case 1:
                out="Low Risk";
                break;
            case 2:
                out="Moderate Risk";
                break;
            case 3:
                out="Medium Risk";
                break;
            case 4:
                out="High Risk";
                break;
        }
        return out
    }
}
