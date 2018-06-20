export interface Animal{
    readonly numberOfLegs:number;
    readonly numberOfHands:number;
}

export interface Human extends Animal{    
    speacies:string;
    gendar:string;
    setTime(d: Date);
    
    greeting():string
    getGendar():string
    setGendar(g:string)
}

