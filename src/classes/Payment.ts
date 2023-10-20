import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly receipent: string, 
        private details: string, 
        public amount: number,
    ){}

    format(){
        return (`${this.receipent} is owed Rs. ${this.amount} for ${this.details}`);
    }
}