const aBigNumber = 899867566537653456456n;
const anotherBigNumber = BigInt(899867566537653456456)

console.log(aBigNumber)
console.log(anotherBigNumber)

//Limites númerios en Javascript
const max = Number.MAX_SAFE_INTEGER //Limite de números maximos en JavaScript 
const min = Number.MIN_SAFE_INTEGER //Limite de números minimos en JavaScript

console.log(max) //9007199254740991
console.log(min) //-9007199254740991

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER)  + BigInt(increment)

console.log(number) //9007199254740992
console.log(bigInt) //9007199254740993n