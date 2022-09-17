// array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);  // b = Apple b = Banana
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
console.log(as, bs)