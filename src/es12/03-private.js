class user {
    // constructor 
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    // metodos 
    #speak (){
        console.log("Puede acceder ")
        return "Hello";
    }
    
    greeting(){
        return `${this.#speak()} ${this.name}`;
        
    }

    get #uAge() { //get obtener. Obtener el valor de age
        return this.age;
        
    }

    set #uAge(n) { //set asignar. Asignar al age el valor de n
        this.age = n
    }

}

const platzi = new user("Ferney Nava", 26);
platzi.greeting();
console.log(platzi.uAge); //Undefined no se puede acceder a uAge puesto de que esta privado(#) solo se puede acceder dentro del constructor 
console.log(platzi.uAge = 45)

