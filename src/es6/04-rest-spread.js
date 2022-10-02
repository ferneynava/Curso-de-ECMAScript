// array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);  // a = Apple b = Banana
console.log(a); // a =  Apple
console.log(b); // b = Banana 
//console.log(a, fruits[1]);

// object destructuring

let user = {username: "Ferney", age: 34};
let {username, age} = user;
console.log(username, age);
//console.log(username, user.age);

let user1 = {username1: "Carlos", age1: 34};
let {username1: as , age1: bs} = user1;
console.log(as, bs);

//spread operator 

let person = {name: "Ferney", age: 28}
let country = "CO";
let data = {id: 1,...person, country};
console.log(data);

let numeros = [1,2,4,5,99];
let array = [...numeros];
array[0] = 777;
console.log(array);
console.log(numeros);

// rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3);