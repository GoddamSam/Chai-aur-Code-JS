//Asynchronous operations--> Network calls, File access, Database queries, etc....

// Promise --> A promise is an object that represents the eventual completion or failure of an asynchronous operation and its result.

//fetch API--> It is the modern technique for handling asynchronous operations and serves as a replacement for XMLHTTPRequest API.It is a promise-based API. It takes in the URL of the resource to be fetched and returns a promise object which on successful fetch operation resolves to a resonse object containing status, headers, response text.

//.then()--> It is a method which can be used by promises which takes in two arguments which are handler functions-one for handing if the async operation has completed successfully and the one to handle if the operation was unsuccessfull.It returns a promise object as well which can be used for thenable chaining.the resolve and reject objects can only be used in the async function inside promise declaration but for thenables the object has to be returned not resolved.

//.catch()--> It contains the handler function  that  will be called if the promise is rejected.

//Creating a promise

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async op');
    resolve('foo');//Apart from connecting the handler function in then() method with the promise we can also send data with the resolve object
    },5000);
})

//Consuming a promise
promise.then(function(resolve){
    console.log('promise is consumed');
    console.log(resolve);
})


//Creating and consuming a promise together

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async op 2');
        resolve();
    },2000);
}).then(function(){
    console.log('promise 2 is consumed');
})

//Using reject and finally

new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false;
        if(!err)
        resolve('async op 3');
        else
        reject('error in async op');//connects the promise with the catch handler if the operation failed as well as can send data
    },2000)
}).then(function(response){
    console.log(response);
    console.log('promise 3 is consumed');
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('finally always executes'));//finally block is always executed whether  the promise is resolved or rejected

// An asynchronous function is used to handle the completion of an asynchronous operation . It consists of await keyword for handling the response on completion of the operation otherwise a catch block can be used to handle failed completion or erroneous situations.it has to be explicitly called.It always returns a promise object on execution.

// async--> It is a keyword  which can be used to convert a function into an async function which can be used to return a promise. It is used to make the function asynchronous. It provides a cleaner approach to handle promise based behaviour.

// await--> It  is a keyword which can be used to wait for the promise to be resolved before executing the next line of code. It is used to make the function  synchronous. It provides a cleaner approach to handle promise based behaviour. It can only be used inside an async function. 

const Promisetwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        
        let err=false;
        if(!err)
        resolve('async tested');
        else
        reject('error in async testing');
    },1000)
})

//using async await format
async function test(){
    try{
    const response=await Promisetwo;
    console.log(response);
    }
    catch(e){
        console.log(e);
    }
}
test();

//using then and catch format

Promisetwo.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('working fine'));

//example 

//using then() and catch()
fetch('https://api.sampleapis.com/coffee/hot').then(function(response){
    const data=response.json();
    return data;
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log('Some error occured');
}).finally(()=>console.log('Everything worked fine'));

//using async await
async function coffeePromise(){
    try{
    const response=await fetch('https://api.sampleapis.com/coffee/hot');
    const data=await response.json();
    console.log(data);
    }
    catch(e){
        console.log('Some error happened');
    }
}
coffeePromise();
