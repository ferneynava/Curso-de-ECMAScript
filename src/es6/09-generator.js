let array = ["Oscar", "David", "Ana", "Ulises", "Jennifer"];
function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(array);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Documentacion https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es