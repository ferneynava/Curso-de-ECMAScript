// enahced object literals 

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser("Ferney", 24, "CO", 1));


