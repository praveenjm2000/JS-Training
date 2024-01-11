/*
//execution context

var n=2;
function square(num){
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

//hoisting

getName();
console.log(x);

var x = 4;
function getName(){
    console.log("Heloo")
}

console.log(x);


//functions
var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}

//scope

function a(){
    var b=10;
    console.log(b);
    c();
    function c(){
        console.log(b);
    }
}
a();
//console.log(b);


const a=10;
{
    const a=100;
    {
        const a=1000;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
*/
//closure

function x(){
    let a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();

z();
