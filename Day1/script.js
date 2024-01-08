//variables
let x=10;
var y=10;
const z=10;
console.log(x,y,z);
x=20;
var y=20;
console.log(x,y,z);

//datatypes
let decimal=1001.00
let num=1000
let string="this is a string";
let bool=true;
let $var=undefined;
let $null=null;

console.log(typeof(decimal),typeof(num),typeof(string),typeof(bool),typeof($var),typeof($null));

//conditional statements
let msg;
if(x<10){
    msg="good day";
}
else if(y<10){
    msg="good night";
}
else{
    msg="great day";
}
console.log(msg);

let d= new Date().getDay;
switch(d){
    case 6:
        console.log("Success! Saturday");
        break;
    case 0:
        console.log("Yey! Sunday");
        break;
    default:
        console.log("Waiting for weekend:(")
}

//loops
let s=0;
for(let i=1;i<5;i++){
    s+=i;
}
console.log(s);

const nums=[2,4,5,2,5];
let txt="";
for(let n in nums){
    txt+=nums[n];
}
console.log(txt);

let a=0;
while(a<5){
    a+=1;
}
console.log(a);

//functions
function square(number){
    return number*number;
}
console.log(x,square(x));

//arrays
const arr=[1,2,3,4,5];
console.log(arr);

arr.push(10);
console.log(arr);

let e = arr.pop();
console.log(e,arr)

let arr1= arr.slice(1);
console.log(arr1);

arr.splice(0,0,10)
let arr2 = arr.toSpliced(0,2);
console.log(arr,arr2);

let arr3 = arr.map(square);
console.log(arr3);

let arr4 = arr.filter(filterFunc);
function filterFunc(n){
    return n>3;
}
console.log(arr4);

let arrSum = arr.reduce(reduceFunc);
function reduceFunc(total, value){
    return total+value;
}
console.log(arrSum);

//objects
let car= {make:"Audi",
    color:"red",
    type:"sedan",
    model:"A4", 
    fullName: function()
    {
        return this.make+" "+this.model;
    }
};
console.log(car.fullName());

//json
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.log(obj.employees[1].firstName+" "+obj.employees[1].lastName);