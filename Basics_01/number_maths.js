//Number declaration type 1
let num=6
console.log(typeof num);

//Number declaration type 2
let num2=new Number(6)
console.log(typeof num2);

//declaration through literal always gives a primitive data while through new keyword results in an object


//Function--> .toFixed()
console.log(7.863545.toFixed(3));//rounds upto given decimal places and returns string

//Function--> .toPrecision()
console.log(7.4534545.toPrecision(5));//rounds upto given significant numbers and returns string

//Function--> .tolocaleString()
const num3=453453535353
console.log(num3.toLocaleString('en-US'))//helps to format numbers to local country conventions

//the functions for numbers are useful in building E-Commerce applications



//Maths is an object in js which has static properties and methods used for mathematical operations

//Function--> .abs()
console.log(Math.abs(-67));

//Function-->.round()
console.log(Math.round(4.455454))

//Function-->.floor()
console.log(Math.floor(4.712));

//Function-->.ceil()
console.log(Math.ceil(4.01));


//Function-->.max()
console.log(`The max value in the array is:-${Math.max(45,-14,78,33,21)}`);//returns the maximum number from a group of numbers

//Function-->.min()
console.log(Math.min(45,-14,78,33,21));//returns the minimum number from a group of numbers

//Function-->.random()
console.log(Math.random());//generates any random number between 0 and 1

//Random function is useful in applications like random OTP or token generations and dice games 

//generating a random number between a range
const min=42
const max=67
const rand=console.log(Math.floor(Math.random()*(max-min+1))+min);//generates a number between 42 and 67

for(let i=0;i<5;i++)
{
    console.log(Math.floor(Math.random()*(max-min+1))+min);
}