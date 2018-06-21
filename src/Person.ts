import {Human, Animal} from "./HumanInterface"


export class Person  implements Human{    
    gendar: string;
    id: number;
    _name: string;
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
    get name():string{
        return this._name + "...";
    }
    numberOfLegs: number;
    numberOfHands: number;
    constructor(_id: number, name: string) {
        this.id = _id;
        this._name = name;
        this.age = 99;      
    }
    
    public getMyAgeInFuture(durationByYear:number):number{

        return this.age + durationByYear;
    } 
    public getPromise():Promise<string>{
        return  new Promise<string>((resolve, reject) => { 
            console.log("wait has began")
            setTimeout(() => {
                resolve('a string'); 
            }, 5000);
       
        });
    
    }
}

async function main() {

    let person = new Person(123,'nagase');
    console.log(person.name)
    console.log(await person.getPromise())
}
main();

