//encapsulation example 
class bank{ 
    constructor(name){
        this.name = name;   
    }
    add_City(city){
        this.city = city;
    }
    getDetails(){
        console.log(`${this.name} Bank was founded in ${this.city}`);
    }
}

let bank1 = new bank('Suntrust', 1891);
bank1.add_City('Atlanta');
console.log('Encapsulation Example:');
bank1.getDetails();


// Abstraction example 
function car(make, model){
    let type = make;
    let name = model;

 let getDetails_noaccess = function(){
     return ( `My first car was a: ${type}, ${name}`);
 }   
 
 this.getDetails_access = function(){
    return ( `My first car was a: ${type} ${name}`); 
 }
}

let car1 = new car('Cadillac', 'Seville');
console.log("Abstraction Example:")
console.log(car1.type);
console.log(car1.getDetails_access());
console.log(car1.getDetails_noaccess);

//Inhertiance example 

class book{
    constructor(title){
        this.title = title;
    }
   toString(){
       return (`Name of book: ${this.title}`);
   } 
}
class library extends book{
    constructor(title, author){
        super(title);
        this.author = author;
    }
    toString(){
        return (`${super.toString()}, Written By: ${this.author}`);
    }

}
let library1 = new library ('SuperFudge', 'Judy Blume');
console.log('Inhertiance example:');
console.log(library1.toString());