//String declaration method 1-->

let myString="Samaroho"
console.log(myString);
console.log(typeof myString);
//String declaration method 2-->

let myString1=new String("Sam")
console.log(myString1);
console.log(typeof myString1)

//Modern convention for writing variables with values 


console.log(`The value of myString is:- ${myString}`);//Use back ticks and dolar sign.


let strmod=myString
strmod=strmod.toLowerCase()
console.log(strmod);
console.log(myString);
//string declared by method 1 behaves as a primitive and gives pass by value

let strmod1=myString1
strmod1=strmod1.toLowerCase()
console.log(strmod1);
console.log(myString1);
//string declared by method 2 behaves as a reference type and gives pass by reference but when it is operated by a method of the prototype it becomes a primitive type again 


//when a string is declared by method 2 it has properties of length and another property called prototype that is also an object and has various fucntions which can be accessed and used by the string object

//Common functions-->

console.log(myString.length);
console.log(myString.charAt(2));
console.log(myString.indexOf('r'));
console.log(myString.substring(0,2));
console.log(myString.slice(-4,7));

