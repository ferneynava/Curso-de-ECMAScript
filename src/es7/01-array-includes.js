let numbers = [1, 3, 4, 6, 8];

console.log(numbers.includes(4)); //True se encuentra en el array
console.log(numbers.includes(9));  //false no se encuentra en el array

const list = ["Oscar", "David", "Ana"]; 

console.log(list.includes("David")); //True se encuentra en el array
console.log(list.includes("david")); //False no se encuentra en el array por pero david en el array esta la primera letra en mayuscula

// Índices positivos y negativos 
// Los indicies positivos comienzan desde el 0 hasta la longitud total menos uno, de izquierda a derercha del array
   // [0,1,2,3,4,5,....,lenght-1]
// Los indices negativos comienzan desde -1 hasta el negativo de la longitd total del array, de derecha a izquierda 
   // [-lenght,...,-3,-2,-1]

// Uilizando arrays
let frutas = ["manzana", "pera", "piña", "uva"]

console.log(frutas.includes("manzana")); //True se encuentra en el array
console.log(frutas.includes("Pera")); // Flase no se encuentra en el array
console.log(frutas.includes("sandía")); // False no se encuentra en el array
console.log(frutas.includes("manzana", 1)); // False no encuentra en el array por que manzana se encuentra es en el indice 0
console.log(frutas.includes("piña", -1)); // False no encuentra en el array por que piña se encuentra es en el indice -2 
console.log(frutas[0].includes("man")); //True evalua solo el elemento que se encuentra en el indice 0 y manzana si tiene las letras man

// Utilizando string 

const saludo = "Hola mundo"

console.log(saludo.includes("Hola")); // true se encuentra en el string
console.log(saludo.includes("Mundo")); // false no se encuentra en el string
console.log(saludo.includes(" ")); // true se encuentra en el string
console.log(saludo.includes("Hola", 1)) // false no se encuentra en el string
console.log(saludo.includes("mundo", -5)) // true se encuentra en el string

///  objetos 
// En objetos tambien existen formas para saber si existe una propiedad 
         //Evalua solo las claves de los objetos
    // - La palabra reservada in
    // - El metodo de objetos hasOwnProperty
    // - El metodo Object.hasOwm, que recibe el objeto y la propìedad a evaluar

const letras = { 
    a: 1,
    b: 2,
    c: 3,
}
    
console.log("a" in letras); //true en el objeto se encuentra la clave "a" 
console.log(letras.hasOwnProperty("a")); //true en el objeto se encuentra la clave "a"
console.log(Object.hasOwn(letras, "a")); //true en el objeto se encuentra la clave "a"

// in evalua todas las propiedades del objeto y del prototipo
// El metodo hasOwnProperty evalúa solamente las propiedades del objeto. 

const letrass = {d: 4, e: 5, f: 7}

console.log(letrass)
console.log(letrass.hasOwnProperty("toString")); 

console.log("toString" in letrass) //true por el objeto letrass tiene un prototipo que se llama toString
console.log(letrass.hasOwnProperty("toString")); //false 
console.log(Object.hasOwn(letrass, "toString")); //false




