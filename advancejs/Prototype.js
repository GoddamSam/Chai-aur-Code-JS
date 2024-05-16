//Prototype-based programming is a programming paradigm where objects are the primary building blocks of code structure. In this paradigm, objects can inherit properties and behavior directly from other objects, known as prototypes. This is in contrast to class-based programming, where objects are instances of classes.

// In the context of JavaScript, prototype-based programming is fundamental to the language's object model. Every object in JavaScript has a hidden internal property called [[Prototype]], which points to another object. When you try to access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it's not found, it continues to look for it in the object's prototype (and recursively in the prototype chain until it reaches the end).

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

//Note:  The standard way to access an object's prototype is the Object.getPrototypeOf() method.

//When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

//The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

const ob1={
    name:this.name,
    greet:function(){
        console.log(`Hello, my name is:-${this.name}`);
    }
};

let ob2=Object.create(ob1);
ob2.name='Sam';
console.log(ob2.greet());
//So, ob2 was created using Object.create() method and ob1 was set as the prototype object for ob2 so it inherited the properties of ob1 i.e, name and greet() function.


do{
    ob2=Object.getPrototypeOf(ob2);
    console.log(ob2);
}while(ob2);
//So this displays the ob1 object as its prototype first then the Object prototype which is the prototype of every objects in js so for ob1 it is same and finally for Object prototype the null prototype object which is displayed as null itself.