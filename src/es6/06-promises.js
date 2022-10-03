const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!!");
        } else {
            reject("Whoooops!")
        }
    })
}
anotherFuncion()
    .then(response => console.log(response)) //En caso que se ejecute resolve  //then 
    .catch(err => console.log(err)); //En caso que se ejecute reject  //catch 



    

const promesa = () => {
    return new Promise((resolve, reject) => {
        if (something) {
            //true o false
            resolve("Se ha resuelto la promesa")
        } else {
            reject("Se ha rechazado la promesa")
        }
        })
}

promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject
