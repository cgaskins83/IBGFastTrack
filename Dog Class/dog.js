class dog { 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    add_Breed(add) {
        this.add = add; 
    }
    getDetails() {
        console.log(`My name is ${this.name} the ${this.add}`);
         }
}

let dog1 = new dog ('Nipsy', 3);
dog1.add_Breed('Lab Mix');
dog1.getDetails();

let dog2 = new dog ('Sir Paws', 3);
dog2.add_Breed('Cheagle');
dog2.getDetails();

