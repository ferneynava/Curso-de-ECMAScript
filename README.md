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

<p align="right">(<a href="#readme-top">volvel arriba</a>)</p>

---
### Introducción

#### Historia de JavaScript: ¿Qué es ECMAScript?

**ECMAScript es el estándar que en la actualidad se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, a través de una serie de versiones que añaden funcionalidad nuevas.**

*El primer navegador web:*  
- 1950: Inicio de las computadoras, surguen para analizar temas de la segunda guerra mundial.

- 1969: Se creo la red ARPADET una forma de comunicar dos computadoras, para compartir información.

- 1990: Tim Berners-lee Invento la World Wide Web las bases de la web.

- 1993: Nacimiento de Mosaic primer navegador Web.

- 1994: Marc Andreessen y James H. Clark fundaron Netscape Communications Corporation el primer navegador comercial y que inicio una revolución de la información.

Entre 1995 y 2001, se enfrentaron Netscape y Microsoft para lograr posicionar comercialmente su propio navegador. Quizas Netscape fue el gran perdedor en las guerras de los navegadores es una de las historias más apasaionantes de la crónica de la Red. 

- 1995: Internet Explorer primer navegador web creador por Microsoft. **Mocha** es un lenguaje de programación propuesta creada por Netscape, poco despues sería nombrado **liveScript** y finalmente JavaScript. **JScript** es un lenguaje de programaciónpara la web propuesta creada por Microsoft.  

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

*Cuidado con la copia en diferentes niveles de profundidad*

El operador de propagación sirve para producir una copia en un solo nivel de profundidad, si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original. 

```js
const originalArray = [1, [2,3], 4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```

Recientemente salió una forma de producir una copia profunda con **StructuredCole**, es una característica reciente. Como es una caracteristica reciente tiene un soporte en navegadores de un 87.71%

```js
const originalArray = [1, [2,3], 4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray // false
originalArray[1] === copyArray[1] //false
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

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
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
