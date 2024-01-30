//scopes are three types--> global scope , functional scope , local scope


if(true){
    let a=6
    const b=7
    var c=8
}
 //console.log(a);
 //console.log(b);
 console.log(c);

 //hence, only var types are globally scoped and let and const are block scoped

 var c=7
 if(true){
    let a=6
    const b=7
    var c=8
}

//since, var types are always globally scoped using them inside blocks becomes difficult since they get updated if variable names are same and pose problems i.e, let and const types are prefered

//***Note***-->the scopes are different in node enviorment and browser's execution enviorment

//Hoisting-->

console.log(addone(2,3))
function addone(a,b)
{
    return a+b
}
//In this type of function declaration hoisting takes place so calling a function even before it is declared works fine


//console.log(sum(2,3))
let sum=function addtwo(a,b){
    return a+b
}
//In this type of declaration the hoisting dosen't work so error is given if the function is accessed before initialization


//this keyword--> it helps to refer to the current context of the function

let myObj={
    username:"Samaroho",
    password:"Sc@6602",
    greet:function display(){
        console.log(`Hello ${this.username}`);
        console.log(this);
    }
}

console.log(myObj.greet());
myObj.username="Riju"
console.log(myObj.greet());
//as we can see the this keyword refers to the current context or the latest values of the object but however this keyword works inside a scope

console.log(this);//this keyword in the global scope returns a empty object in the node enviorment
//but printing the this keyword in the chrome's console this keyword refers to the window object that has all the events

//************ Regular functions vs Arrow functions***************

//a) In regular function the this keyword dynamically refers to the execution contezt of the function which depends on how the function is invoked like-if standalone then this refers to the global context, if present inside a object then this refers to the object, if standalone but called separately through .call() or .apply methods then this refers to the object in the argument, and if called thorugh a constructor using new then a new instance is created and this refers to that new instance

function myFunction() {
    console.log(this);
  }
  
  // Simple invocation
  myFunction(); // logs global object (window)

  const myObject = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObject.method(); // logs myObject

  function myFunction() {
    console.log(this);
  }
  
  const myContext = { value: 'A' };
  
  myFunction.call(myContext);  // logs { value: 'A' }
  myFunction.apply(myContext); // logs { value: 'A' }

  function MyFunction() {
    console.log(this);
  }
  
  new MyFunction(); // logs an instance of MyFunction

  //But in case of arrow fnctions when this is used inside it this gets resolved lexically ot this refers to the execution context of outer function or outer object

  let myObjec = {
    myMethod(items) {
      console.log(this); // logs myObject
      const callback = () => {
        console.log(this); // logs myObject
      };
      items.forEach(callback);
    }
  };
  
  myObjec.myMethod([1, 2, 3]);


  //b) when regular functions are invoked thorugh constructors and new keyword then a new instance is created and this refers to that whereas calling arrow functions thorugh constructors gives error since it is resolved lexically

  function Car(color) {
    this.color = color;
  }
  
  const redCar = new Car('red');
  redCar instanceof Car; // => true

  const Car = (color) => {
    this.color = color;
  };
  
  const redCar1 = new Car('red'); // TypeError: Car is not a constructor

  //c)In regular functions the arguments are available as an array of objects as argument keyword whereas i arrow functions the argument keyword gives access to the outer function or object's arguments and for getting the arguments of the current function rest operator is used-->...args

  function myFunction() {
    console.log(arguments);
  }
  
  myFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

  function myRegularFunction() {
    const myArrowFunction = () => {
      console.log(arguments);
    }
  
    myArrowFunction('c', 'd');
  }
  
  myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

  function myRegularFunction() {
    const myArrowFunction = (...args) => {
      console.log(args);
    }
  
    myArrowFunction('c', 'd');
  }
  
  myRegularFunction('a', 'b'); // logs ['c', 'd']


  //d)arrow functions can be implicitly returned without curly braces and return statement whereas in regualr functions we have to explicityly use a return function


  //e)the regular functions when used inside a class usually pose a problem like if the functions having this keyword is called outside the class before the constructor then it returns undefined since without calling constructor the execution context of this will be the global context so we have to explicity bind the argument to the function if we are not calling the constructor beforehand whereas in arrow functions this problem dosen't occur since this in arrow fucntion automatically binds to the scope of the outer object,class or function...

  class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName() {
      console.log(this);
    }
  }
  
  const batman = new Hero('Batman');

  setTimeout(batman.logName, 1000);
// after 1 second logs "undefined"

setTimeout(batman.logName.bind(batman), 1000);
// after 1 second logs "Batman"

class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName = () => {
      console.log(this.heroName);
    }
  }
  
  const batman1 = new Hero('Batman1');

  setTimeout(batman.logName, 1000);
// after 1 second logs "Batman1"