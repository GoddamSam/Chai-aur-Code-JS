//objects can be created by two methods

//Method 1-->using literals
let person={
    name:"Samaroho",
    age:22,
    gender:'male',
    isDisabled:false,
    "subjectOfInterest":'Chemistry'
}

//Method 2-->using constructor
let person3=new Object({Riju:21,Deba:28})//this is a singleton object
console.log(person3);
//objects created through constructors are often called singleton objects

//accessing the object elements

//method 1
console.log(person.name);

//method 2
console.log(person['name']);//the key in the backend is stored as a string so in the index the key has to be given as a string

//usecase of method 2
console.log(person['subjectOfInterest']);//when the key is used as a string itself then it can't be accessed using . operator so it has to be indexed and accessed

//using symbols as an object attribute
let mySym=Symbol('key1')
let person2={
    name:"Samaroho",
    [mySym]:'2345',
    age:22,
    'gender':'male',
    isDisabled:false,
    "subjectOfInterest":'Chemistry'
}
//for using a symbol as a key it has to be enclosed within third brackets otherwise the key will be treated as a string
console.log(person2);

//freeze-->it makes the object attributes fixed and prevents any overwriting

//Object.freeze(person2)
person2.name="riju"
console.log(person2);

//using function as an attribute of object

person2.greeting=function(){console.log("Hello person2");}
console.log(person2.greeting);//returns the function reference when just the function is asked without calling
console.log(person2.greeting());//returns the execution result of the function

//assign-->helps to combine multiple sourece objects and into a target object by modifying the target object and returning the target object itself
let ob1={Sam:21,Raj:22}
let ob2={Ayan:22,Arghya:21}
let ob3=Object.assign({},ob1,ob2)//{} using an empty object as target and the others as source
console.log(ob1===ob3);

//spread operator-->
let ob4={...ob1,...ob2}//returns a new object combining all of the other objects
console.log(ob4);

//fetching the keys of an object
console.log(Object.keys(ob4));//returns the keys as an array of strings

//fetching the values of an object
console.log(Object.values(ob4));//returns the values as an array of strings

//entries-->returns the key values pairs as an array of two indexed arrays
console.log(Object.entries(ob4));

//hasOwnProperty-->checks whether an object has the given key or not
console.log(ob4.hasOwnProperty('age'));
console.log(ob4.hasOwnProperty('Sam'));