//Acá estamos declarando y asignando el valor 
var lastName = "David";
//Acá reasignamos el valor de la variables lastName
lastName = "Oscar";
console.log(lastName);

//Declaramos y asignamos 
let fruit = "Apple";
//Reasignamos el valor de la variable fruit
fruit = "Kiwi";
console.log(fruit);


const animal = "Dog";
//Con const no podemos reasignar un valor
animal = "Cat";
console.log(animal);

//Arrow Functions  
const fruits = () => {
    if(true){
        var fruit1  =  "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana"
    }
    console.log(fruit1); //function scope 
    //console.log(fruit2); //block scope
    // console.log(fruit3); //block scope
}

fruits();