//How does a code executes in javascript

//First step--> a global execution context or enviorment is set up and this keyword refers to the global execution context and this context is different for different enviorments like for chrome console it is windows object , for node it is an ampty object {}, for Bun it is different, etc..

//Second step--> a cycle or phas starts called Memory Creation Phase where all the variables are gathered and ans are assigned undefined values for ones storing primitive values and the ones storing non-priitives like objects, functions, arrays are assigned the definitions of those objects or functions

//Third step--> second cycle or phase called execution phase starts where all kind of operations, computations and data manipulations occur, all the variables are assigned their values and inner fucntion calls are executed....

//fourth step--> when inner functions are called they again start another process-->

//a new sandbox enviorment or execution context is set up inside the outer function and it is added in the call stack
//inside the enviorment--> a new variable enviorment is set up and a execution thread is provided for execution
//the memory creation phase and execution phase are started again for the inner function 
//the results are generated after the execution phase of the inner function and they are returned to the global context thus releasing the inner function's execution stack from the call stack.

//the execution phase of the outer funtion continues...


//Why Javascript is called a single-threaded language?

//JavaScript is often referred to as a "single-threaded" language because it has a single execution thread in its runtime environment. This means that it can only perform one operation at a time in a single sequence, or thread of execution. This characteristic is a result of JavaScript's origins and its primary use case, which is as a scripting language for web browsers.

//While JavaScript itself is single-threaded, many web browsers and runtime environments that execute JavaScript code are multi-threaded. For example, modern browsers typically have separate threads for rendering, handling user input, and executing JavaScript. This allows the browser to remain responsive even when a JavaScript operation takes some time to complete, thanks to the event-driven and asynchronous programming model.