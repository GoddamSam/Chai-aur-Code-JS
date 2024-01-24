//six primitive data types-->number,string,boolean,null,undefined,symbol 

//typeof function tells the type of the value

console.table([typeof 5,typeof 'Sam',typeof true,typeof null,typeof undefined])

//type of null is object whereas type of undefined is undefined....this is a instance of debate where some say it is a bug in the language while some say this is the norm


//The classification of data types in JS is based on how the data is stored in memory and how it is accessed from memory.

//Mainly two types-->Primitive and Non primitive

//Primitive-->number, string, boolean, null, undefined, symbol and bigInt

//These types use pass by value and give copies of their value in operations

console.log(typeof null);

let num=45366564334346335646n;
console.log(typeof num)

//the type of null is object whereas other have their same types.

//Non Primitive data types have Reference data types which give their reference in the operations and hence follow pass by reference

let arr=["Sam","Harry","John"]

let Myobj={
    "Sam":22,
    "Arghya":23
}

let Myfn=function()
{
    console.log("This is a function")
}

console.log(typeof arr)
console.log(typeof Myobj)
console.log(typeof Myfn)

//the type of function is object function in reality although is displays function