function newUser(name, age, country){
    var name = name || "Ferney";
    var age = age || 24;
    var country = country || "Co";
    console.log(name, age, country);
}

newUser();
newUser("Camila", 24, "MX");

//Es6

function newAdmin(name = "Ferney", age = 32, country = "CL"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "PE");