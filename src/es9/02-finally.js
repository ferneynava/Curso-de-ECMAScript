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
    .catch(err => console.log(err)) //En caso que se ejecute reject  //catch 
    .finally(() => console.log("Finnaly"));

    