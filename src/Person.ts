import {Human, Animal} from "./HumanInterface"


export class Person  implements Human{    
    gendar: string;
    id: number;
    name: string;
    age: number;
    speacies: string;
    setTime(d: Date) {
        throw new Error("Method not implemented.");
    }
    greeting(): string {
        throw new Error("Method not implemented.");
    }
    getGendar(): string {
        return this.gendar;
    }
    setGendar(g: string) {
        this.gendar = g;
    }
    numberOfLegs: number;
    numberOfHands: number;
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
        this.age = 99;      
    }
    
    public getMyAgeInFuture(durationByYear:number):number{

        return this.age + durationByYear;
    } 
}

