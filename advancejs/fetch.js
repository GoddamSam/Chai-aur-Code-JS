//fetch()--> It is a global function which initiates the fetching of a resource from a network and returns a promise object which resolves only when the request is complete. It was introduced in ES6 version. The promise object gets reolved to a response object which represents the response to the request. The fetch() promise only rejects if the request fails due to badly formed URL or network errors. If the response is status codes like 404, 504, 200,etc. then these are part of the response object itself and not the reject object.

//fetch() has a separate task queue which has special priority and the registered call backs in the fetch queue are entertained first and enters into the call stack first so on executing setTimeout and fetch functions together the result of fetch are displayed first. The special task queue of fetch is called micro task queue or priority queue or fetch queue itself.

//When fetch() function is used then it performs two types of operations-firstly, it goes to the memory to reserve space in form of a data field, an onfulfilled array and an onrejected array. Theses can't be accessed by the user. Secondly, it goes to handle the browser API or native node API for generating the network request which then goes to the given URL and either gets fulfilled or gets rejected. If gets fulfilled the response is pushed to the onfulfilled array as the response object and if rejected goes to the onrejected array. The onfulfilled and onrejected has the event handler functions which on executing sends the result to the data field which is initially empty and then the data after being fulfilled or rejected is sent to the variable that contains the fectch() method in the global menory and then the data becomes directly accessible to the user.

fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    const data=response.json();
    return data;
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});