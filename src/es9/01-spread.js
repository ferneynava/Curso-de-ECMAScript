const user = {
                username: "FerneyNava",
                age: 26,
                country: "CO"
            }
const {username,...values} = user;
console.log(username);
console.log(values);


const arrays = ["Ferney", 26, "CO"];
const [names, ...ageCountry] = arrays;
console.log(names, ageCountry)