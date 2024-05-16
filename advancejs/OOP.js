// Javascript is primarily a prototype-based language and not object oriented or functional. The class based syntax was added in EcmaScript 2015 or ES6 as syntactic sugar for provding comfort to developers coming from class based background- c++ or java. Inspite of having the syntax everything under the hood is prototype based mechanism.

//OOPs was used to increase reusability and code readability which was missing in the prototye based mechanism in Js.

//Abstraction--> While using fetch() method the underlying complexities of how a network request is made and the resources are accquired are hidden from the user and the useful details are only mentioned.

//Encapsulation-->  A function can encapsulate multiple functions or variables within itself preventing their access from outside directly but only through the function tself. The properties of a class can be declared as private and can only be accessed using getter and setters to increase privacy.

//Inheritance--> 

//Polymorphism--> It can be exercised by using different approaches. JS does not have a built in method overloading or overriding functionalities but by using ...args and if-else conditions we can use overloading and it uses prototype based inheritance to exercise overridding.

//Object--> It is a collection of properties and methods.

//Object literal--> It is the basic unit in JS and literally means an object.

//example
// const user={
//     username: 'Sam',
//     loginTimes:7,
//     signedIn:true
// };

// console.log(user['username']);

//Constructor function-->  It is a function that is used to create multiple instances or copies of object literals or functions. It is also used to create objects of a class. It can also be used to create multiple separate contexts.

//this keyword refers to the current context.

const car={
    carname:'Maruti Omni',
    cartype:'Ambassador',
    noOfWheels:4,

    getCarDetails:function(){
        console.log(this);//this refers to the current context i.e, current object car
    }
};
car.getCarDetails();
console.log(this);//this refers to global context which is empty in node environment but in browser this refers to the Windows object with plethora of properties and methods of windows object in the global context.

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;
}

const userone=User('Same',5,true);
const usertwo=User('Ayan',7,false)
console.log(userone);
//so if constructor function and new is not used this only one instance is shared between multiple variables and this refers to the latest context or object.

const userthree=new User('Arijit',1,false);
const userfour=new User('Samar',11,true);
console.log(userthree);
console.log(userfour);
//new and contructor function creates multiple instances of the function keeping the contexts separate for separate objects.

//when new keyword and constructor function is used then the following things happen- firstly an empty object called instance is created, secondly, the variables are assigned with the arguments passed third, the values are injected in the this keyword and lastly we get our properties and their corresponding values in the global context.

//constructor property--> It is a property of object which returns the reference of the constructor function that created the object or instance in the first place. It does not return a string but the reference.

console.log(userthree.constructor);

const arr=[1,2,3]
console.log(arr.constructor);

//instanceOf --> this is a operator that checks whether the prototype of the constructor function is present inside the prototype chain of an object.

console.log(userthree instanceof User);//true
//hence, the prototype of property of User constructor function is present inside the prototype chain of userthree object that is why true is returned