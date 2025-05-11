
let obj = new Object();

var array = new Array();//0
array[0] = 100;
array[1] = 200;
array[2] = 300;

//var array = new Array(5);//length = 5;
var array =new Array(1,-5,3.3,5,6,9,8,100);
for (let i = 0; i < array.length; i++) {
    console.log(`Element [${i}] - ${array[i]}`);
}

var array = []; //empty array
var array = [3,-5,123,44,-1,7,8,9,23,36,52]; 

console.log(`Lenght = ${array.length}`)
array[0] = 44;
console.log(array[0]);
console.log("Before :", array);

array[5]= 60;
console.log("After :", array);
//danger zone
// array[50]= 60;
// console.log("After :", array);

console.log(`Lenght = ${array.length}`)
for (let i = 0; i < array.length; i++) {
    console.log(`Element [${i}] - ${array[i]}`);
}

array.forEach((elem, index)=>{
    console.log(`Element [${index}] - ${elem}`);
});

for (const element of array) {
    console.log(element)
}
for (const index in array) {
    console.log(index)
}
//----------------Array methods -------------------
console.log("Original array",array);

//add element to the end
array.push(777);
console.log("Array",array);
//delete element in the end
array.pop();
console.log("Array",array);
//delete first element
array.shift();
console.log("Array",array);
//add to the start
array.unshift(555);
console.log("Array",array);

console.log("Index of first 123 : ", array.indexOf(123));
console.log("Index of first last 123 : ", array.lastIndexOf(123));
console.log("Found first even : ", array.find((elem)=> elem%2==0));

array.sort();
console.log("Array",array);

array.sort((a,b)=> a-b);
console.log("Array",array);

array.splice(2,3);//2 - index, 3 - count
console.log("Array",array);

const copy = array.slice(1,array.length-1);
console.log("Array copy",copy);

const filtered = array.filter((el)=> el%2==0)
console.log("Array filtered",filtered);

const colors = ['red','green','blue','yellow','white'];

const str = colors.join(' - ');
console.log("str :",str);
console.log("Words  :",str.split(' - '));


