///////// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Greeter from '../../src/greeterNode';

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
 
    
    it('永井文字列', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet()+"{There are two types of supported index signatures: string and number. It is possible to support both types of indexers, "+
        "but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, "+
        "JavaScript will actually convert that to a string before indexing into an object. That means that indexing with}");

        expect(true).toBeTruthy();
    });
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
});

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());

        expect(true).toBeTruthy();
    });
});