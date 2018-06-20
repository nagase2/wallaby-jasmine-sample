///////// <reference path="../typings/jasmine/jasmine.d.ts"/>

import {Person} from '../../src/Person';

const newLocal = 'John';
describe('Sayings Greeter', () => {
    it('should greet', () => {
        var person = new Person(12,"tanaka");
        person.setGendar("female")
        console.log(person.getGendar()+"...."); /*? */
        expect("female").toBe(person.getGendar());
    });
  
    
});