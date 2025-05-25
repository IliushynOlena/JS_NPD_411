console.log(obj);

var obj = new Object();

var obj = {};
//add new property 
obj.name = "Olga";
obj.name = "Mukola";
obj.number = 1010;
obj.address = "Rivne. Soborna 16";
console.log("Address : " + obj.address);
//delete property
delete obj.address;

console.log("Name : " + obj.name);
console.log("Address : " + obj.address);
//console.log(product);
let product = {
    name : "Motorola",
    price : 7500,
    memory : 128,
    application :["Facebook","Viber", "Whatsapp"],
    owner:{
        name: "Olena",
        surname: "Iliushyn"
    }
}

console.log(`Owner Full name : ${product.owner.name} 
    ${product.owner.surname}`)

var prod = {};
//setter
prod["name"] = "Ball";
prod["size"] = 25.5;
prod["price"] = 500;
prod["type"] = "football";

prod["name"] = "FootBall";
//getter
console.log(prod["name"]);
console.log(prod["size"]);
console.log(prod["price"]);
console.log(prod["type"]);

var student = {};
student.name = "Vova";
student.age = 18;

student.averageMark = 7.8;
student["Average Mark"] = 12;
delete student.averageMark;

student.address = "Kyivska 67";
delete student.address;
if("address" in student)
{
    console.log(student.address);
}
else{
    console.log("Property not found");
}

// for (var property in student) {
//     alert(property + " : " + student[property])
// }

var car = {
    model: "Nissan",
    power : 250,
    color: "grey",
    year : 2018
}
var res = "\tCar info : \t\n";
for(var property in car){
 res += property+ " : " + car[property] + "\n";
}
alert(res);

let person={
    name : "Bob",
    birthdate : 2000,
    address : {
        street : "Chervonia",
        city:"Rivne",
        building: 15
    },
    cars: ["Nissan","Leaf","Toyota"]
}
function addCarToPerson(person, newCar)
{
    person.cars.push(newCar);
}
function showAllCars(person)
{
    alert("Cars : " + person.cars);
}
// let name_car = prompt("Enter model of car : ")
// addCarToPerson(person, name_car);
// showAllCars(person);

var player = {
    login:"super_user",
    password: "qwerty",
    email:"user@gmail.com",
    score: 0,
    print: function ()
    {
        console.log(`User : ${this.login}, 
    password : ${this.password}`)
    },

    increaseScore(value){this.score += value}
}
player.print();

