//IIFE--> Immediately Invoked Function Expressions
//A function that is called immediately after it's defined.

//usecase 1-->if my file has only a database connection expression and I want to execute it as soon as I start the application then I sill use iife in that case

//usecase 2-->sometimes, global variables interfere with the operations in the functions so to prevent the contamination of global variables we use iife

(function myIIFE(val)
{
    console.log(val);
})(5);
//as you can see in order to execute it immediately the function has to be scope on itself by parantheses and then I pass arguments to it

//unnamed iife

((val)=>{
    console.log(val);
})(5);



(function myIIFE1(val)
{
    console.log(val);
})(5);

(function myIIF2E(val)
{
    console.log(val);
})(5);

//onexecuting this an error occurs because an iife dosen't know when to stop its context or execution so in order to let the console know that this should end here and in order to execute multiple iifes together semicolon should be written after the argument list