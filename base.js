 //some code....
//alert("Hello Java Script!!!");
console.log("Hello Java Script from console!!!")

let empty;                     //undefined
let nullObject = null;         //null
let number = 44.2;             //number
let email = "helen@gmail.com"; //string
let flag = false;              //boolean
let sum = function(a,b){console.log(`${a} + ${b} = ${a+b}`)}//function
let array = [1,2,3,"red","green",false,[11,12,13],sum];//object
console.log(number);
console.log(typeof(number));

console.log("Some text");
console.log('Some text');
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`);
console.log(`Flag = ${flag}, type : ${typeof(flag)}`);

number = "hello";
email = false;
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`);
console.log(`Empty = ${empty}, type : ${typeof(empty)}`);
console.log(`nullObject = ${nullObject}, type : ${typeof(nullObject)}`);

console.log(`sum = ${sum}, type : ${typeof(sum)}`);

sum(5,6)

console.log(`array = ${array}, type : ${typeof(array)}`);
console.log(array[0])
console.log(array[6])
console.log(array[6][0])
console.log(array[7](1,3))


//--------------- cycles -----------
const numbers = [33,8,4,7,26,5,-3]

for (let i = 0; i < numbers.length; i++) {
    const element = array[i];
    console.log(`[${i}] - ${numbers[i]}`)
}

console.log("Value : " + 333 + "!!!");
console.log("Value : " + 333 + 10 + "!!!");
console.log("Value : " + (333 + 10) + "!!!");
console.log(`Value : ${333+10}!!!`);
console.log("-----------Elements--------------")
//--- forof - get all elements
for (const element of numbers) {
    console.log(element)
}

//--- forin
console.log("-----------Indexes--------------")
for (const index in numbers) {
    console.log(index);       
}
console.log(`Length = ${numbers.length}`)
numbers[17] = 100;
console.log("-----------Elements--------------")
//--- forof - get all elements
for (const element of numbers) {
    console.log(element)
}
console.log(`Length = ${numbers.length}`)
console.log("-----------Indexes--------------")
for (const index in numbers) {
    console.log(index);       
}

console.log("Some log");
console.warn("Some warning!");
console.error("Some error!!!");

if (5 > 4)
{
    console.log("True")
}
else{
    console.log("False")
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let message = (3 > 2) ? "bigger":"less";

function divide(a,b){
    if(b == 0)
    {
        console.error("Can*t divide by zero!!!");
    }
    return a/b;
}
function summa(a,b){
    return a+b;
}
let numA = +prompt("Enter number A : ")
let numB = +prompt("Enter number B : ")

alert("Result : " + divide(numA,numB));
alert("Result : " + summa(numA,numB));