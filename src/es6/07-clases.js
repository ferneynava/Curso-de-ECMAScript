// declarando 
class User {}
// instancia de una clase 
//const newUser = new User();

class user {
    //metodos 
    greeting(){
        return "Hello";
    }
}

const saludo = new user();
console.log(saludo.greeting());

const herencia = new user();
console.log(herencia.greeting());

// constructor

class user {
    // Constructor
    constructor(){
        console.log("Nuevo Usuario")
    }
    greeting(){
        return "Hello";
    }
}

const david = new user();

// this

class user {
    constructor(name){
        this.name = name
    }
    // metodos
    speak(){
        return "Hello"
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ferney = new user("Nava");
console.log(ferney.greeting());

// setters getters 

class user {
    // constructor 
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    // metodos 
    speak (){
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() { //get obtener. Obtener el valor de age
        return this.age;
    }

    set uAge(n) { //set asignar. Asignar al age el valor de n
        this.age = n;
    }
}

const platzi = new user("Ferney Nava", 26);
console.log(platzi.uAge);
console.log(platzi.uAge = 20);