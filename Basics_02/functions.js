//parameters are the variables written in the function definition whereas arguments are the variables passed from outside the function when it is invoked or called

function mySym(a,b){
    return (a+b)
}

console.log(mySym(5,6));//11

//in this function mySym--> a,b are the parameters and 5,6 are the arguments passed during function call

//function declaration method 1-->

function add(a,b){
    return a+b;
}
console.log(add(2,3));//8

//function declaration method 2-->
const sub=(a,b)=> a-b
console.log(sub(5,2))//3

//Example
const myF=(str)=> console.log(Array.from(str));

console.log(myF('HITESH'));

//we can also set a default value at the parameter if no argument is passed
function multiply(x=10,y=1) {return x*y;}
console.log(multiply());//10
//as no argument is passed it takes the default values x=10 and y=1 

//rest operator-->helps to handle multiple arguments when the number is not known beforehand
/*let max=function(num1,num2){
    return num1+num2
}
console.log(max(11,12,7));//if no. of parameters is p then the first p no. of arguments are taken from the argument list*/


let max=function(...args){
    let ans=Number.MIN_VALUE

    for(const i of args)
    ans=Math.max(ans,i)
    
    return ans
}
console.log(max(2,3,5,-1));
//this operator has a usecase in shopping carts of e-commerce apps where user can add any number of items in the cart

let max1=function(val1,val2,...args){
    return args
}
console.log(max1(1,2,3,4,4));//val1=1 , val2=2 , args=[3,4,4].

//type checking
let myObj={
    name:"Sam",
    ages:22
}

function myF1(obj){
    console.log(`the name is:${obj.name} and the age is:${obj.age}`);
}
console.log(myF1(myObj))//if the object property is not present then undefined is returned by the function so checking is necessary that the property is there in the object or not

//direct objects or arrays can be passed as well

function F1(obj){
    console.log(obj.name);
}
F1({name:'Samar'})

function F2(arr){
    return arr[2]
}
console.log(F2([1,2,3,4,5]))
