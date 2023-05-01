<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ferneynava/Curso-de-ECMAScript">
    <img src="./images/112-book-morph-linealtrans.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center"><strong>Curso de ECMAScript: Historia y Versiones de JavaScript</strong></h3>
  <img src="./images/OG_crop_16-9-escmascript-historia.png"> 
  <p align="center">
    JavaScript es el lenguaje más utilizado para desarrollo de aplicaciones web, principalmente en el frontend. Cada año, ECMA International publica una nueva edición de ECMAScript, la especificación a la cual se ajusta JavaScript. Aprende las nuevas características que implementa ECMAScript desde la versión ES6 hasta la versión ES13
<br />
    <a href="https://github.com/ferneynava/Curso-de-ECMAScript"><strong>Explore los documentos »</strong></a>
    <br />
  </p>
</div>

---

## Índice 

- [Índice](#índice)
  - [Introducción](#introducción)
    - [Historia de JavaScript: ¿Qué es ECMAScript?](#historia-de-javascript-¿qué-es-ecmascript)
    - [¿Qué es el TC39?](#¿qué-es-el-tc39)
  - [ECMAScript 6 (ES6 o ES2015)](#ecmascript-6-es6-o-es2015)
    - [Let y const, y arrow function](#let-y-const-y-arrow-function)
    - [Strings](#strings)
    - [Parámetros por defecto](#parámetros-por-defecto)
    - [Asignación de desestructuración](#asignación-de-desestructuración)
    - [Spread operator](#spread-operator)
    - [Object literals](#object-literals)
    - [Promesas](#promesas)
    - [Clases](#clases)
    - [Module](#module) 
    - [Generator](#generator)
    - [Set-add](#set-add)
  - [ECMAScript 7 (ES7 o ES2016)](#ecmascript-7-es7-o-es2016)
    - [Operador de potenciación y array includes](#operador-de-potenciación-y-array-includes)
  - [ECMAScript 8 (ES8 o ES2017)](#ecmascript-8-es8-o-es2017)
    - [Object entries y object values](#object-entries-y-object-values)
    - [String padding y trailing commas](#string-padding-y-trailing-commas)
    - [Funciones asíncronas](#funciones-asíncronas)
  - [ECMAScript 9 (ES9 o ES2018)](#ecmascript-9-es9-o-es2018)
    - [Expresiones regulares](#expresiones-regulares)
    - [Promise.finally](#promisefinally) 
  - [ECMAScript 10 (ES10 o ES2019)](#ecmascript-10-es10-o-es2019)
    - [Flat-map y trimStart-trimEnd](#flat-map-y-trimstart-trimend)
    - [Try catch y fromEntries](#try-catch-y-fromentries)
  - [ECMAScript 11 (ES11 o ES2020)](#ecmascript-11-es11-o-es2020)
    - [Optional chaining](#optional-chaining)
    - [BigInt y Nullish](#bigint-y-nullish)
    - [Promise.allSettled ](#promiseallsettled)
    - [GlobalThis y matchAll](#globalthis-y-matchall)
    - [Dynamic Import](#dynamic-import)
  - [ECMAScript 12 (ES12 o ES2021)](#ecmascript-12-es12-o-es2021)
    - [Numeric-separators y replaceAll](#numeric-separators-y-replaceall)
    - [Promise-any y métodos privados](#promise-any-y-métodos-privados)
  - [ECMAScript 13 (ES13 o ES2022)](#ecmascript-13-es13-o-es2022)
    - [At](#at)
    - [Top level await en el consumo de una API](#top-level-await-en-el-consumo-de-una-api)
  - [Contribuyendo](#contribuyendo)
  - [Contacto](#contacto)
  - [Expresiones de gratitud](#expresiones-de-gratitud)

<p align="right">(<a href="#readme-top">volvel arriba</a>)</p>

---
### Introducción

#### Historia de JavaScript: ¿Qué es ECMAScript?

**ECMAScript es el estándar que en la actualidad se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, a través de una serie de versiones que añaden funcionalidades nuevas.**

*El primer navegador web:*  
- 1950: Inicio de las computadoras, surgen para analizar temas de la segunda guerra mundial.

- 1969: Se creo la red ARPADET una forma de comunicar dos computadoras, para compartir información.

- 1990: Tim Berners-lee Invento la World Wide Web las bases de la web.

- 1993: Nacimiento de Mosaic primer navegador Web.

- 1994: Marc Andreessen y James H. Clark fundaron Netscape Communications Corporation el primer navegador comercial y que inicio una revolución de la información.

Entre 1995 y 2001, se enfrentaron Netscape y Microsoft para lograr posicionar comercialmente su propio navegador. Quizás Netscape fue el gran perdedor en las guerras de los navegadores es una de las historias más apasionantes de la crónica de la Red. 

- 1995: Internet Explorer primer navegador web creador por Microsoft. **Mocha** es un lenguaje de programación propuesta creada por Netscape, poco después sería nombrado **LiveScript** y finalmente JavaScript. **JScript** es un lenguaje de programación para la web propuesta creada por Microsoft.  

- 1996: CSS propuesta de estilos creado por Microsoft. 

- 1997: ECMA (*European Computer Manufacturer Association*)  estandarizar múltiples lenguajes de programación surgido por parte de Netscape, Microsoft y otras empresas.

*Evolución de ECMAScript* 

<img src="./images/ecma01.PNG"> 

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 
#### ¿Qué es el TC39?

**TC39 grupo de desarrolladores, academicos encargados de revisar y actualizar cada nueva propuesta o funcionalidades, bajo el mando de ECMA. El estándar se caracteriza por una serie de pasos que cada propuesta sigue para publicar en alguna versión de ECMAScript** 

*Etapas de una nueva propuesta para ECMAScript*

- Stage0:  Strawperson (borrador, cualquier persona puede tener una idea para implementar en el estandar)

- Stage1: Proposal (propuesta formal)

- Stage2: Draft (borrador, como va a funcionar la implementacion el impacto entre otros)

- Stage3: Candidate (se elige el candidato, vamos a tener una propuesta que va ayudar a mejorar el lenguaje.)

- Stage4: Finished (va a ser desplegada en la version normalmente en JUNIO)

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---
### ECMAScript 6 (ES6 o ES2015)

#### Let y const, y arrow function

**Nueva forma para declarar variables let y const**

Las palabras reservadas **let** y **const** solucionan algunos problemas de **var** tales como el *scope*, *hoisting*, *variables globales*, *re-declaración* y *re-asignación* de variables 

*Variables re-declaradas y re-asignadas*

La re-declaración consiste en volver a declarar una variable, y la re-asignación es volver a asignar un valor a la variable. Cada palabra reservada (*var, let y const*) tiene una forma diferente de utilizar variables. 

 - var: Puede ser re-declarada y re-asignada. 
 - let: No se puede re-declarada pero si re-asignada. 
 - const: No se puede re-declarada, ni re-asignada. 

Al momento de re-declarar una variable con let y const, este producira un error "variable ya declarada"

**Ejemplo de declaración y asignación en diferentes líneas** 

```js
// Declaración de variables 
var nombreVar 
let nombreLet

// Asignación de variables
nombreVar = "Soy Var"
nombreLet = "Soy Let"
```

**Ejemplo de declarar y asignar con const de diferentes líneas de código**

```js
const valorPi
valorPi = 3.14
```

**Ejemplo de re-declaración de variables**

```js
 var nombreVar = "Soy var"
 let nombreLet = "Soy let"
 const nombreConst = "Soy const"


 // Re-declaración de variables
 var nombreVar = "var"
 console.log(nombreVar) // "var"

 let nombreLet = "let" // SyntaxError: Identifier 'nombreLet' has already been declared.

 const nombreConst = "const" //SyntaxError: Identifier 'nombreConst' has already been declared.
```
**Ejemplo de re-asignación de variables**

```js
var nombreVar = "Soy var"
let nombreLet = "Soy let"
const nombreConst = "Soy const"

// Re-asignación de variables
nombreVar = "otro var"
console.log(nombreVar) // "otro var"

nombreLet = "otro let"
console.log(nombreLet) // "otro let"

nombreConst = "Otro const" // TypeError: Assignment to constant variable.
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

*Funciones flecha (arrow functions)*

Consiste en una función anónima. Las funciones anónimas permite no asignarle a un nombre a un conjunto de instrucciones que deseeamos ejecutarlo sin necesidad de asociarlo. 

```js
// Función tradicional

function nombre (parámetros) {
  return valorRetornado
}

// Función flecha

const nombre = (parámetros) => {
  return valorRetornado
}
```

*Omitir paréntesis en las funciones flecha* 

Si en la función existe un solo parámetro, puede omitir los paréntesis.

```js 
const multiplicaciónPorDos = num => {
  return num * 2
}
```

*Retorno implícito* 

Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada **return**, esto con el fin de que el código sea escrito en una sola línea. 

```js
// Función tradicional 
function suma (num1, num2) {
  return num1 + num2
}

// Función flecha
const suma = (num1, num2) => num1 + num2
```

Si se requiere de más lineas y desea utilizarlo de una manera implícita, deberás envolver el cuerpo de la función entre paréntesis. 

```js
const suma = (num1, num2) => (
  num1 + num2 
)
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p> 

---

#### Strings

*Concatenación de caracteres* 

Para crear una cadena larga, se puede utilizar la concatenación. Consiste en unir uno o varios caracteres,utilizando el signo de suma. 

```js
var nombre = "Ferney"
var edad = 26
var mensaje = "Mi nombre es " + nombre " y tengo " + edad + " años."

console.log(mensaje) // "Mi nombre es Ferney y tengo 26 años." 
```

*Cómo utilizar las plantillas literales*

Se emplea el caracter acento grave (`) y para incluir las variables se utiliza la sintaxis ```${variable}```

```js
var nombre = "Ferney"
var edad = 26

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`
console.log(mensaje) // "Mi nombre es Ferney y tengo 26 años." 
```

*Plantilla multilínea*

Consiste en crear mensajes que contengan varias líneas separadas entre si, utilizando las plantillas literales. Antes la forma de crear una plantilla multilínea es agregando \n al string. 

```js
var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1 
// línea 2'
```

Con ES6 solo se necesita utilizar las plantillas literales 

```js
var mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1 
// línea 2'
```
<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Parámetros por defecto

Ayudan a definir un valor inicial a las variables que son recibidas en la función. Esto permite mejorar la legibilidad y el mantenimiento del código. 

```js
// Antes de ES6 se utilizaba los valores por defecto de la siguiente forma. 
function newUser(name, age, country){
    var name = name || "Ferney";
    var age = age || 24;
    var country = country || "Co";
    console.log(name, age, country);
}

newUser();
newUser("Camila", 24, "MX");

//Ahora con Es6 se utiliza de esta forma

function newAdmin(name = "Ferney", age = 32, country = "CL"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "PE");
```

*Posición de los parámetros por defecto* 

Si Obligatoriamente necesitas el valor como argumento, es necesario que los parámetros por defecto siempre deben estar en las posiciones finales. 

```js
function sumar (number1, number2 = 0){...}
sumar(3)
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---
#### Asignación de desestructuración

Es una expresión que consiste en extraer los valores de arrays o propiedades de objetos en distintas variables. 

*Desestructuración de objetos* 

Consiste en extraer las propiedades de un objeto en variables. Por medio del mismo nombre de la propiedad del objeto. 

```js
const objeto = {
  prop1: "valor1",
  prop2: "valor2",
  ...
}

// Desestructuración 
const { prop1, prop2} = objeto 
```

Antes de ES6, se necesitaba acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente. 

```js
var usuario = { nombre: "FerneyNava", edad: 26, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre) // "FerneyNava"
console.log(edad) // 26
console.log(plataforma) // "Platzi"
```

Gracias a desestructuración de objetos podemos reralizar lo mismo, pero en una sola línea, logrando que el código sea más legible y mantenible

```js
const usuario = { nombre: "FerneyNava", edad: 26, plataforma: "Platzi" }
const { nombre, edad, plataforma } = usuario

console.log(nombre) //"FerneyNava"
console.log(edad) // 26
console.log(plataforma) // "Platzi
```

*Cambiar el nombre de las variables con desestructuración*

Para cambiar los nombres de las propiedades del objeto, podemos utilizar la desestructuración de la siguiente forma: 

```js
const objeto = { prop1: "valor1", prop2: "valor2", ... }

// Desestrcuturación
const { prop1: newProp1, prop2: newProp2 } = objeto
```

**Ejemplo**

```js
const usuario = { nombre: "Ferney", edad: "26", plataforma: "Platzi"}

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name) // "Ferney"
console.log(age) // 26
console.log(platform) // "Platzi"

console.log(nombre) // Uncaught ReferenceError: nombre is not defined
```

*Desestructuración en parámetros de una función* 

Al enviar un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores diferentes. Hay que tener en cuenta que el nombre debe ser igual a la propiedad del objeto. 

```js
const usuario = { nombre: "Ferney", edad: "26", plataforma: "Platzi"}

function datos( { nombre, edad, plataforma }){
  console.log(nombre, edad, plataforma)
}

datos(usuario) // "Ferney", 23, "Platzi"
```

*Desestructuración de arrays*

Consiste en extraer los valores de un array en variables, haciendo uso de las posiciones del array. 

```js
const array = [ 1, 2, 3, 4, 5] 

// Desestructuración
const [ uno, dos, tres ] = array 

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
```

*Desestructuración para valores retornados de una función*

En el momento en que una función retorna un array, puedes guardarlo en una variable. Por ende, se puede utilizar la desestructuración para utilizar esos valores por separado de manera legible.

En el sisguiente ejemplo, la función **useState** retorna un array con dos elementos: un valor y otra función actualizada. 

```js
function useState(value){
  return [value, updateValue()]
}

//Sin desestructuración
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
```
<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Spread operator

Consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos ( ... ) dentro de un array.

```js
// Para Strings 
const array = [..."Ferney"] // [ "F", "e", "r", "n", "e", "y"]

// En arrays
const otherArray = [...array] // [ "F", "e", "r", "n", "e", "y"]
```

*Copiar arrays utilizando el operador de propagación*

Realizar una copia de un array, tendras que tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Por este motivo si cambias algo en la copia, tambien lo harás en el original. 

```js
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray // true
```

Para lograr evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una  referencia en memoria diferente al original. 

```js
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray //false
```

*Arrays y añadir elementos con el operador de propagación*

Para unir dos arrays con el operador de propagación, debes separarlos por comas en un array. 

```js
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [...array1, number, ...array2]

otherArray // [1,2,3,4,5,6,7]
```

*Cuidado con la copia en diferentes niveles de profundidad arrays*

El operador de propagación sirve para producir una copia en un solo nivel de profundidad, si existen arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original. 

```js
const originalArray = [1, [2,3], 4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```

*Propiedades de propagación en un objeto*

Consiste en expandir las propiedades de un objeto utilizando el [spread operator](#spread-operator). Funciona para crear nuevos objetos a partir de otros. 

```js
const objeto = {
  nombre: "Ferney",
  age: 26,
}

const usuario = {
  ...objeto, 
  plataforma: "Platzi"
}
```

*Crear copias de objetos utilizando las propiedades de propagación*

Semejante a crear copias de *arrays* utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación. 

Logrando que el segundo objeto tenga referencia en memoria diferente al original. 

```js
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal 
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false
```

*Cuidado con la copia en diferentes niveles de profundidad objetos*

El operador de propagación sirve para crear una copia en un soslo nivel de profundidad, si existen objetos dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en el copia y en el original. 

```js
const original = {datos: [1, [2, 3], 4, 5]}
const copia = {...original}

original === copia // false
original["datos"] === copia["datos"] // true 
```

Recientemente salió una forma de producir una copia profunda con **StructuredCole**, es una característica reciente. Como es una caracteristica reciente tiene un soporte en navegadores de un 87.71%

```js
// Array
const originalArray = [1, [2,3], 4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray // false
originalArray[1] === copyArray[1] //false

// Objeto
const original = {datos: [1, [2, 3], 4, 5]}
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false
```

**Recurso articulo escrito por [midudev](https://midu.dev/como-clonar-un-array-en-javascript/) Cómo clonar un Array en JavaScript de forma correcta y sin problema** 

*Parámetro rest*

Consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos ( ... ) seguido de una variable que contendrá los elementos en un array. Sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array. 

```js
function hola (primero, segundo, ...resto){
  console.log(primero, segundo) // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)
```

Tambien sirve para obtener los elementos restantes de un array u objeto usando desestructuración. 

```js
const objeto = {
  nombre: "Ferney",
  age: 26, 
  plataforma: "Platzi"
}

const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = array

usuario // { nombre: "Andres", age: 23 }
positivos // [1, 2, 3, 4, 5]
```

Es importe que el parámetro rest siempre debe estar en la ultima posición de los parámetros de la función, puesto de que existirá un error de sintaxis. 

```js
function hola (primero, ...rest, ultimo){ ... }
// SyntaxError: Rest element must be last element. 
```

*Rest vs operador de propagación*

El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado. 

```js
const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
```


<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Object literals 

Consiste en crear objetos a partir de variables sin repetir el nombre. Anteriormente para crear un objeto a partir de variables consistía en la siguiente manera: 

```js
const nombre = "Ferney"
const edad = 23

const objeto = {
  nombre: nombre
  edad: edad
}

objeto //  { nombre: 'Andres', edad: 23  }
```

*Cómo utilizar objetos literales*

Gracias a los parámetros de objeto puedes obviar la repetición de nombre,JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor. 

```js
const nombre = "Ferney"
const edad = 26

const objeto = {nombre, edad}

objeto // { nombre: "Andres", edad: 23 }
```

El resultado es el mismo, pero sin la necesidad de repetir palabras. Se puede combinar con variables que su propiedad tiene un nombre diferente. 

```js
const nombre = "Ferney"
const edad = 26
const esteEsUnID = 1

const objeto = {
  nombre,
  edad,
  id: esteEsUnID
}

objeto // { nombre: 'Andres', edad: 23, id: 1 }
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Promesas

Las promesas es una forma de manejar el asincronismo en JavaScipt y se representa como un objeto que puede generar un valor unico a futuro, tiene dos estados, o esta resuelta o incluye una razón por la cual no ha sido resuelta la solución. 

*Cómo utilizar las promesas*

La clase **Promise** y sus métodos **then** y **catch** fueron añadidos en ES6. Esto logra resolver un problema del manejo del asincronismo con *callbacks*, llamado *Callback Hell*

La clases **Promise** es una función que recibe dos parámetros: 

- *resolve*: cuando la promesa es resulta. 
- *reject*: cuando la promesa es rechazada. 

No es necesario utilizar como nombres estos dos parámetros, puedes utilizar cualquier nombre. 

```js
const promesa = () => {
  return new Promise((resolver, reject) => {
    if(something) {
      //true o false
      resolver("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) // En caso que se ejecute resolve
  .catch(error => console.log(error)) // En caso que se ejecute reject
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Clases

Class es una forma para crear clases y manejar la herencia, logrando resolver problemas con el paradigma de programación orientado a objetos. 

*Estructura de las clases en JavaScript*

La estructura de clases en JavaScript consiste en: 

- Definir la clase con la palabra reservada class, seguido del nombre.

- La función constructora sirve para crear las variables necesarias en la instancia del objeto, a partir de los argumentos en la instancia. 

- Para definir atributos necesitas el contexto this, que representa la instancia del objeto. 

- Métodos para definir las acciones de las clases. 

- Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.  

```js
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
```

#### Module 

ES6 introduce una forma de manejar código en archivos de manera modular. Esto involucra **exportar** funciones o variables de un archivo, e **importarlas** en otros archivos donde se necesite. 

*Cómo utilizar los módulos de ECMAScript*

Para utilizar los módulos, debes tener mínimo dos archivos, uno para exportar las funciones y otro que las importe para ejecutarlas. 

Es importante de que si iniciaste un proyecto con NPM (Node Package Manager) con Node.js, necesitas esfecificar que el código es modular en el archivo.json de la siguiente manera: 

```json
// package.json
{ ...
  "type": "module"
}
```

*Exportaciones de código*

Consiste en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada **export**. 

Por ejemplos, en el archivo *math_function.js* declaramos una función para sumar dos valores, el cual lo exportaremos. 

```js
//math_function.js
export const add = (x,y) => {
  return x + y
}
```

```js
//math_function.js
const add = (x,y) => {
  return x + y
}

export { add, otherFunction, ...}
```

*Qué son las importaciones de código*

Consiste en usar funciones o variables de otros archivos mediante la palabra reservada **import**, deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original. 

Por ejemplos, importamos la función *add* del archivo *math_function.js* para utilizarla en un archivo *main.js*

```js
// main.js

import { add, otherFunction } from "./math_functions.js"

add(2,2) // 4
```

Si importamos el módulo con un nombre diferente, existirá un error de sintaxis. 

Para importar todas las funcionalidades de un archivo se utiliza un asteristico ( * ) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada *as*. 

```js
// main.js

import * as myMathModule from "./math_functions.js"

myMathModule.add(2,2) // 4
myMathModule.otherFunction() 
```

*Exportaciones por defecto*

Si solo un valor será exportado, se puede utilizar **export default**. De esta manera no es necesario las llaves {} al exportar e importar. 

```js
//math_function.js

export default function add (x,y){
  return x + y;
}
```

No se puede usar export default antes de declaraciones *const*, *let* o *var*, pero puedes exportarlas al final. 

```js
// ❌ Erróneo
export default const add  = (x,y) => {
    return x + y;
}

// ✅ Correcto
const add  = (x,y) => {
    return x + y;
}

export default add
```

*Importaciones por defecto*

Si únicamente un valor será importado, entonces se puede utilizar cualquier nombre en la importación. De esta manera no se necesario las llaves {}.

```js
//Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'
```

*Combinar ambos tipos de exportaciones e importaciones*

Teniendo las importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo. 

```js
// module.js

export const myExport = "Hola"
function myFunction() { ... }

export default myFunction 

// main.js
import myFunction, { myExport } from "/module.js"
```
<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Generator

Son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores. 

*Cómo utilizar generadores*

La sintaxis de los generadores es la siguiente: 

- La palabra reservada function* (con el asterisco al final)
- La palabra reservada *yield* que hace referencia al valor retornado cada vez que se invoque, recordando eñ valor anterior. 
- Crear una variable a partir de la función generadora. 
- El método *next* devuelve un objeto que contiene una propiedad *value* con cada valor de yield; y otra propiedad *done* con el valor *true* o *false* si el generador ha terminado.

```js
function* nombre (parámetros){
  yield (primer valor retornado)
  yield (segundo valor retornado)
  ...
  yield (último valor retornado)
}

//crear el generador
const generador = nombre(argumentos)

// Invocaciones
generador.next().value // primer valor retornado 
generador.next().value // segundo valor retornado 
... 
generador.next().value // último valor retornado
```

*Ejemplo de un generador*

```js
function* generator (){
  yield 1
  yield 2
  yield 3
}

const generador = generator()

generador.next().value // 1
generador.next().value // 2
generador.next().value // 3
generador.next() // {value: undefined, done: true}
```

*Cómo utilizar for of y for in*

Existen dos nuevas formas de utilizar ciclos repetitivos. El bucle **for valor  of iterable** recorre iterables, como arrays, Map, Set e incluso un generador. 

El valor es cada elemento del iterable, se inicia con *let nombre*. Puede tener cualquier nombre. 

```js
const array = [5, 6, 3, 2, 1]

for (let numero of array){
  console.log(numero) // 5, 6, 3, 2, 1
}
```

Hay que tener en cuenta que solo podrás acceder a sus valores, y no a sus referencias, por lo que si quieres cambiar los elementos del array, necesitarás un índice array(indice).

```js
for (let numero of array){
  numero *= 2
  console.log(numero) // 10 12 6 4 2
}

console.log(array) // [5, 6, 3, 2, 1] 
```

Si intentas recorrer un objeto de esta forma *for elemento of objeto*, ocurrirá un error, porque un objeto no es un iterable. En su lugar se utiliza *for elemento in objeto*, que recorrerá las propiedades del objeto. 

```js
const objeto = { a: 1, b: 2, c: 3 }

for(let elemento in objeto) {
  console.log(elemento) // "a" "b" "c"
}
```

Si utiliza *for elemento in array*, no dará error, pero el resultado no será el esperado, puesto de que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. 

```js
const array = { 5, 4, 3, 2, 1 }

for(let elemento in array) {
  console.log(elemento) // "0" "1" "2" "3" "4"
}
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Set-add

Es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos. 

*Cómo utilizar los Sets*

Para iniciar un *Set*, se debe crear una instancia de su clase a partir de un iterable. Un iterable es un objeto que permite recorrer una colección, como por ejemplo un *array*

```js
const set = new Set(iterable)
```

*Manipular los Sets*

Para manipular los sets, existen los siguiente métodos: 

- add(value): Añade un nuevo valor. 
- delete(value): Elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor. 
- has(value): Retorna un booleano si existe o no el valor dentro del Set. 
- clear(value): Elimina todos los valores del Set. 
- size: Retorna la cantidad de elementos del Set. 

**Recurso Map y Set [javaScript.info](https://es.javascript.info/map-set#filtrar-miembros-unicos-del-array)**

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

### ECMAScript 7 (ES7 o ES2016)

#### Operador de potenciación y array includes 

Consiste en elevar una base a un exponente utilizando el doble asterisco ( ** )

**base ** exponente**

Ejemplo, calcula la potencia del siguiente número 5^3 

```js
const potencia = 5**3

console.log(potencia) // 125
```

*Método includes*

Determina si un array o string incluye un determinado elemento. Devuelve **true** o **false**, si existe o no respectivamente. 

Este método recibe dos argumentos: 
- El elemento a comparar
- El índice inciial desde donde comparar hatas el último elemento. 

*Índices positivos y negativos*

Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. 

```js
[0,1,2,3,....., lenght-1]
```

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del *array*, de derecha a izquierda. 

```js
[-lenght, ..., -3, -2, -1]
```

*Ejemplos utilizando el método includes*

Método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y expacios. 

```js
// Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
```

```js
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true 
```

En objetos tambien existen formas para saber si existe una propiedad. Solo evalua las clases de los objetos. Con la siguiente palabra resevada y los siguientes metodos. 

- La palabra reservada in; evalua todas las propiedades del objeto y del prototipo.
- El metodo de objetos **hasOwnProperty**; Evalúa solamente las propiedades del objeto.
- El metodo **Object.hasOwm**, que recibe el objeto y la propiedad a evaluar.

```js
// Utilizando arrays
const letras = {
  a: 1,
  b: 2, 
  c: 3
}

console.log("a" in letras) //true en el objeto se encuentra la clave "a"
console.log(letras.hasOwmProperty("a")) // true en el objeto se encuentra la clave "a"
console.log(Object.hasOwm(letras, "a")) // true en el objeto se encuentra la clase "a"

const letrass = {d: 4, e: 5, f: 7}

console.log(letrass)
console.log(letrass.hasOwmProperty("toString")) // false
console.log("toString" in letras) // true por el objeto letrass tiene una prototipo que se llama toString
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

### ECMAScript 8 (ES8 o ES2017)

#### Object entries y object values

Los métodos de transformación de objectos a *arrays* sirven para obtener la información de las propiedades, sus valores o ambas. Devuelve una matriz de pares clave-valor. 

*Obtener los pares de valor de un objeto en un array* 

*Object.entries()* devuelve un *array* con las entries en forma [propiedad, valor] del objeto enviado como argumento. 

```js
const usuario = {
  name: "Ferney", 
  email: "ferneynava@gmail.com"
  age: 26
}

Object.entries(usuario)
/*
 [
  [ "name", "ferney"],
  [ "email", "ferneynava@gmail.com"],
  [ "age", 23]
 ]
*/
```

*Obtener las propiedades de un objeto en un array*

*Object.keys()* devuelve un array con las propiedades (*keys*) del objeto enviado como argumento. 

```js
const usuario = {
  name: "Ferney", 
  email: "ferneynava@gmail.com"
  age: 26
}

Object.keys(usuario)
// ["name", "email", "age"]
```

*Obtener los valores de un objeto en un array*

*Object.values()* devuelve un *array* con los valores de cada propiedad del objeto enviado como argumento. 

```js
const usuario = {
  name: "Ferney", 
  email: "ferneynava@gmail.com"
  age: 26
}

Object.values(usuario)
// ["Ferney", "ferneynava@gmail.com", 26]
```

#### String padding y trailing commas

*Rellenar un string o padding*

Padding consiste en rellenar un *string* por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima. 

Este método recibe dos argumentos:

- La longitud máxima a rellenar, incluyento el string inicial. 
- El *string* para rellenar, por defecto, es un espacio. 

*Método padStart*

Este método completa un *string* con otro *string* en el inicio hasta tener total de caracteres especificado. 

```js
"abc".padStart(10) // "       abc"
"abc".padStart(10, "foo") //"foofoofabc"
"abc".padStart(6, "123456") //123abc"
"abc".padStart(8, "0") //00000abc
"abc".padStart(1) // "abc"
```

*Método padEnd*

Este método completa un *string* con otro *string* en el final hasta tener un total de caracteres especificado. 

```js
"abc".padEnd(10) // "abc      "
"abc".padEnd(10, "foo") // "abcfoofoof"
"abc".padEnd(6, "123456") // "abc123"
"abc".padEnd(1) // "abc"
```

*Trailing commas*

Consisten en comas al final de objetos o arrays que facilitan añadir nuevos elementos y evitar errores de sintaxis. 

```js
const usuario = {
  name: "Ferney", 
  email: "ferneynava@gmail.com"
  age: 26, //<-- Trailing comma
}

const nombres = [
  "Ferney", 
  "Erika",
  "Pedro", //<--- Trailinf comma
]
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Funciones asíncronas

*funciones asíncronas* 

La función asíncrona se crea mediante la palabra reservada *async*  y retorna una promesa. 

```js
async funcition asyncFunction () {...}

const asyncFunction = async () => {...}
```

La palabra reservada await **significa que espera hasta que una promesa sea resuelta** y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada. 

```js
async funcition asyncFunction () {
  try {
    const respuesta = await promesa()
    return respuesta
  } catch (error) {
    return error
  }
}
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

### ECMAScript 9 (ES9 o ES2018)

#### Expresiones regulares

Las expresiones regulares o RegEx (regular expresions) son **patrones de búsqueda y manipulación de cadenas de caracteres**. 

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda. 

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
const match = regesData.exec("2018-04-20")
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

--- 

#### Promise.finally

*Método finally en promesas*

Consiste en ejecutar código después que una promesa haya sido ejecutada como resultado o rechazada. 

```js
promesa()
  .then(response => console.log(response)) // Promesa resuelta
  .catch(error => console.log(error)) // Promesa rechazada
  .finally(() => console.log("Finalizado")) // Código final
```

*Generados asíncronos*

Los generadores asíncronos son semejantes a los [Generadores](#generator), pero combinando sintáxis de promesas. 

```js
async function* anotherGenerator(){
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
```

*Cómo utilizar for await*

*for await* 

Es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con *async*. 

El valor es cada elemento del iterable puede tener cualquier nombre. 

```js
async function forAwait(){
  const nombre = ["Ferney", "Erika", "Pedro"]
  for await(let valor of nombre) {
    console.log(valor)
  }
}
```
<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### ECMAScript 10 (ES10 o ES2019)

#### Flat-map y trimStart-trimEnd

*Qué es el aplanamiento de arrays*

Consiste en transformar un array de arrays a una sola dimensión. Los métodos *flat* y *flatMap* permitirán realizar el aplanamiento. 

*Método flat*

Devuelve un *array* donde los sub-arrays han sido propagados hasta una profundidad especifica. 

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original. 

Este método recibe un argumento: 

- La *profundidad* del aplanamiento, por defecto, tiene un valor de 1. 

Se puede aplanar todos los sub-arrays en una sola dimensión, utilizando el valor de *Infinity*

```js
const array = [1,2[3,4],5,6]
const result = array.flat()
result // [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]]
const result2 = array2.flat()
result2 // [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2)
result3 // [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity)
result4 // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

*Método flatMap*

Es un combinación de los métodos *map* y *flat*. Primero realiza la interación  de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera *flat*)

Este método es **inmutable**, es decir, retorna un nuevo array con los cambios y no cambia el array original. 

El método recibe los mismos argumentos que el método map. 

```js
const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(""))
// [['Nunca', 'pares'], ['de', 'Aprender']]
strings.flatMap(string => string.split(""))
// ['Nunca', 'pares', 'de', 'Aprender']

const numbers = [1,2,3,4]
numbers.map(number => [number * 2])
// [[2],[4],[6],[8]]
numbers.flatMap(number => [number *2])
// [2,4,6,8]

// Cuidado, primero hace el map y luego el flat 
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number * 2])
// [2, NaN, 8, 10]
// Recuerda: NaN = No a Number
```

*Eliminar espacios en blanco de un string*

Existen tres métodos para *eliminar espacio en blanco* de un string

- El método *trim* elimina los espacios en blanco al inicio y al final. 
- EL método *trimStart* o *trimLeft* elimina los espacios al inicio. 
- El método *trimEnd* o *trimRight* elimina los espacios al final. 

```js
const saludo = "    hola       " 
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // "hola"
result2 // "hola        "
result3 // "       hola"
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Try catch y fromEntries 

*Parámetro opcional de catch*

El parametro de *catch*, permite omitir el error si es necesario. 

```js
try {
  // Manejar el código 
} catch (err) {
  // Se utiliza el parámetro 'err'
}

try {
  // Manejar el código 
} catch {
  // Manejar el error sin el parámetro. 
}
```

Se recomienda manejar el error como parámetro, puesto de que tiene más información del problema. 

*Cómo transformar un array de arrays en un objeto*

El metodo **Object.fromEntries** devuelve un objeto a partir de un arrays donde sus elementos son las *entries* en forma [propiedad, valor]

Se puede considerar la opción inversa de **Object.entries()**. *entries()*  transforma el objectos a arrays y en cambio el *fromEntries()* transforma el array en objeto. 

```js
const arrayEntries = [
  ['name', 'Ferney'],
  ['email', 'ferneynava@gmail.com'],
  ['age', 26]
]

const usuario = Object.fromEntries(arrayEntries)

console.log(usuario)
/* {
  name: 'Ferney',
  email: 'ferneynava@gmail.com'
  age: 26
}
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### ECMAScript 11 (ES11 o ES2020) 

#### Optional chaining

Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript retornará *undefined*. 

```js
const usuario = {}
console.log(usuario.redes) // undefined
```

Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como *undefined*, el programa se detendrá y mostrará un error. 

```js
const usuario = {}
console.log(usuario.redes.facebook) 
//  TypeError: Cannot read properties of undefined (reading 'facebook')
```

Ejecutar *undefined.facebook* es un error de tipo, debido a que *undefined* es un primitivo, no es un objeto. 

*Cómo utilizar el encadenamiento opcional*

Optional chaining (?.) detiene la evaluación del objeto cuando el valor es *undefined* o *null* antes del (?.), retornara *undefined* sin detener el programa por un error. 

```js
const usuario = {}
console.log(usuario.redes?.facebook) 
//undefined
```

Pero, ¿por qué usaría propiedades de un objeto vacío? Cuando realizas peticiones, el objeto no contiene la información solicitada en seguida, por ende, necesitas que el programa no colapse hasta que lleguen los datos y puedas utilizarlos. 

*No abuses del encadenamiento opcional*

El encadenamiento opcional se debe utilizar únicamente cuando problamente un valor no exista. 

Por ejemplo, en un objeto *usuario* que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir *usuario.redes?.facebook* y no *usuario?.redes?.facebook*. 

Si abusas del encademiento opcional y existe un error en un objeto, el programa podría "ocultarlo" por un *undefined*, provocando que el *debugging* sea más complicado. 

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### BigInt y Nullish

*BigInt, números enteros muy grandes*

El dato primitivo *bigint* permite **manejar números enteros muy grandes**. Existen dos formas de crear un *bigint*: el número entero seguido de *n* o mediante la función *BigInt*. 

```js
const aBigNumber = 899867566537653456456n
const anotherBigNumber = BigInt(899867566537653456456)

typeof 899867566537653456456n // "bigint"
```

JavaScript tiene límites numéricos, un máximo **Number.MAX_SAFE_INTEGER** y un mínimo **Number.MIN_SAFE_INTEGER**

```js
const max = Number.MAX_SAFE_INTEGER // 9007199254740991
const min = Number.MIN_SAFE_INTEGER // -9007199254740991
```

Al pasar de los limites anteriormente mencionados, los cálculos muestran resultados erróneos. Los *bigint* ayudan a manejar operaciones de enteros fuera de los límites.  

```js
const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment //  9007199254740992 sin el BigInt
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment) //9007199254740993n con el BigInt
```

Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado. 

*Operador Nullish Coalescing*

El operador nullish coalescing ( ?? ) consiste en evaluar una variable si es *undefined* o *null* para asignarle un valor. 

El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Ferney", caso contrario asigna el valor de usuario.name.  

```js
const usuario1 = {}
const nombre1 = usuario1.name ?? "Ferney"

const usuario2 = {name: "Camilo"}
const nombre2 = usuario2.name ?? "Ferney"

console.log(nombre1) // 'Ferney'
console.log(nombre2) // 'Camilo'
```

*Diferencia entre el operador OR y el Nullish coalescing*

El operador OR ( || ) evalúa un valor false. Un valor false es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null. 

Puede que reciba una variable con un valor false que necesitas asignarle a otra variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo. 

```js
const id = 0

const orId = id || "Sin id"
const nullish = id ?? "Sin id"

console.log(orId) // Sin id
console.log(nullish) // 0 
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Promise.allSettled 

*Promise.all*

El método *Promise.all* sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un *array* de promesas. 

```js
Promise.all([promesa1, promesa2, promesa3])
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error))
```

El problema es que *Promise.all()* se resolverá, si y solo si **todas las promesas fueron resueltas**. Si al menos una promesa es rechazada, *Promise.all()* será rechazada. 

*Promise.allSettled*

Permite manejar varias promesas, que devolverá un *array* de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada. 

```js
const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa1, promesa2, promesa3])
  .then(respuesta => console.log(respuesta))

  /* [
    {
      status: "rejected",
      reason: "Ups promesa 1 fallo"
    },
    {
      status: "fulfilled", value: "Promesa 2"
    },
    {
      status: "reject",
      reason: "Ups promesa 3 fallo"
    }
  ] */
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### GlobalThis y matchAll 

*Objeto global para cualquier plataforma* 

El motor de JavaScript, compila tu archivo y lo convierte en código que entiende el computador, al iniciar la compilación crea un objeto global. 

Este objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente. 

En el navegador el objeto global es *window*, para Node.js es *global*, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a *window*, ni en el navegador podrás acceder a *global*. 

Para estandarizar el objeto global se creó *globalThis*, un objeto compatible para cualquier plataforma.  

```js
// Ejecuta el siguiente código y observa que muestra
console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js

global === globalThis // true
```

*Método matchAll para expresiones regulares*

El método matchAll de los strings **devuelve un iterable** con todas las coincidencias del strings específico a partir de una expresión regular, colocada como argumento. 

```js
const regex = /\b(Apple)+\b/g
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// Transformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)

/*
[
  [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ],
  [
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ]
]
*/
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Dynamic Import

*Cómo utilizar importación dinámica*

Consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Permite que la página web sea más rápida, porque descarga menos recursos. 

La expresión *import()* recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa. 

```js
const ruta = "./modulo.js"

// Utilizando promesas
import(ruta)
  .then( modulo => {
    modulo.funcion1()
    modulo.funcion2()
  })
  .catch(error => console.log(error))

// Uilizando async/await
async function importarModulo(rutaDelModulo){
  const modulo = await import(rutaDelModulo)
  modulo.function1()
  modulo.function2()
}

importarModulo(ruta)
```

*Ejemplo utilizando importación dinamica*

De esta manera puedes utilizar una importación dinámica en tu aplicación para desencadenar una descarga de un módulo cuando el usuario lo vaya a utilizar. Por ejemplo, al realizar clic en un botón. 

```js
const boton = document.getElementById("boton")

boton.addEventListener("click", async function() {
  const modulo = await import("./modulo.js")
  modulo.funcion()
})
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### ECMAScript 12 (ES12 o ES2021)

#### Numeric-separators y replaceAll

*Separadores numéricos* 

Ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc. 

```js
// Baja legibilidad
const numero1 = 3501548945
console.log(numero1) // 3501548945

// Alta legibilidad
const numero2 = 3_501_548_945
console.log(numero2) // 3501548945
```

De esta manera podemos identificar el número rápidamente. 

*Método replaceAll*

El método *replaceAll* retorna un nuevo string, remplazando todos los elementos por otro. 

Este método recibe dos argumentos:
- El patrón a reemplazar, puede ser un string o una expresión regular. 
- El nuevo elemento que sustituye al reemplazado. 

Este metodo soluciona el problema que tenía *replace*, que realizaba la misma función de reemplazar elementos, pero solamente *una sola vez* por invocación. 

```js
const mensaje = "JavaScript es maravilloso, con JavaScript puede crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// "Python es maravillo, con JavaScript puede crear el futuro de la web."

mensaje.replaceAll("JavaScript", "Python")
// "Puthon es maravillo, con Python puede crear el futuro de la web."

mensaje.replaceAll(/a/g, "*")
// "J*v*Script es m*r*villoso, con J*v*Script puede cre*r el futuro de l* web."
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Promise-any y métodos privados

*Métodos privados de clases*

Consiste en *limitar el acceso a propiedades y métodos* agregando el caracter numeral ( # ). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase. 

```js
class Clase {
  #private(valor){
    console.log(valor)
  }

  public(valor){
    console.log(valor)
  }
}

const clase = new Clase()
clase.public("Hola") // "Hola"
clase.private("Hola") // TypeError: clase.private is not a function
```

*Promise.any*

Es otra forma de manejar promesas, que **retornará la primera promesa que sea resuelta** y rebotará si todas las promesas son rechazadas. 

```js
const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")

Promise.any([promesa1, promesa2, promesa3])
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error))
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### ECMAScript 13 (ES13 o ES2022) 

#### At

El método *at* de arrays sirve para **acceder a los elementos a partir del índice.**

*Índices positivos y negativos*

Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. 

```js
[0,1,2,3,....., lenght-1]
```

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del *array*, de derecha a izquierda. 

```js
[-lenght, ..., -3, -2, -1]
```

*Cómo utilizar el método at* 

La utilidad más importante de este método es para manejar *índices negativos*. Algo que no se puede con la notación de corchetes. 

```js
const nombres = ["Andres", "Monica", "Damaris", "Lina", "Ramiro"]

nombres.at(-1) // "Ramiro"
nombres[-1] // undefined
nombres.at(-3) // Damaris
nombres[nombres.length - 1] // "Lina"
```

Se puede utilizar la notación de corchetes, pero necesitas obtener la longitud del *array* y restarle una unidad, generando mucho código que puede volverse dificil de leer. 

```js
const nombres = ["Andres", "Monica", "Damaris", "Lina", "Ramiro"]

nombres[nombres.length - 1] // "Lina"
```

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

#### Top level await en el consumo de una API

Permite utilizar la palabra reservada *await*, sin estar dentro de una función asíncrona con *async*. Sin embargo, únicamente se puede utilizar *await* en la parte superior del archivo de un módulo. 

*Cómo utilizar top level await* 

Cuando se introdujo funciones asíncronas, si utilizabas *await* fuera de *async*, existirá un error de sintáxis. 

```js
// Error
await fetch(URL)
// SyntaxError: await is only valid in async function
```

Ahora, con *top level await* esto es posible, sin ningún error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo. 

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### Contribuyendo

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas es muy apreciada.

Si tiene una sugerencia que mejoraría esto, bifurque el repositorio y crea una solicitud de extracción. También puede simplemente abrir un problema con la etiqueta "mejora". ¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Bifurcar el repositorio 
2. Crea tu rama de funciones (`git checkout -b <Nombre de la rama>`)
3. Confirme sus cambios (`git commit -m "mensaje del commit'`)
4. Empuje a la rama (`git push origin branch`)
5. Abrir una solicitud de extracción

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### Contacto

Ferney Alexander Nava Trujillo - ferneynava@gmail.com

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>

---

### Expresiones de gratitud

* Ándres Guana Contributor de Platzi

<p align="right">(<a href="#índice">⬆ Volver a índice</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/ferneynava/Curso-de-ECMAScript.svg?style=for-the-badge
[contributors-url]: https://github.com/ferneynava/Curso-de-ECMAScript/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ferneynava/Curso-de-ECMAScript.svg?style=for-the-badge
[forks-url]: https://github.com/ferneynava/Curso-de-ECMAScript/network/members
[stars-shield]: https://img.shields.io/github/stars/ferneynava/Curso-de-ECMAScript.svg?style=for-the-badge
[stars-url]: https://github.com/ferneynava/Curso-de-ECMAScript/stargazers
[issues-shield]: https://img.shields.io/github/issues/ferneynava/Curso-de-ECMAScript.svg?style=for-the-badge
[issues-url]: https://github.com/ferneynava/Curso-de-ECMAScript/issues
[license-shield]: https://img.shields.io/github/license/ferneynava/Curso-de-ECMAScript.svg?style=for-the-badge
[license-url]: https://github.com/ferneynava/Curso-de-ECMAScript/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ferney-alexander-nava-trujillo-0478a8118/
[product-screenshot]: images/screenshot.png
