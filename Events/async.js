//Javascript is --> Synchronous and Single threaded

//Synchronous--> Javascript executes every peice of code or line of code sequentially in order so often it leads to blocking behaviour i.e, if a long running peice comes in between then the peices succeding it will not execute untill its execution is finished so this behaviour often leads to freezing of the UI and makes the application unresponsive so asynchronous design practises are implemented to provide a more responsive user experience

//Single threaded--> In JavaScript, there is only one thread(smallest unit of execution within a process(a running program)) of execution, which means that code is executed in a sequential and linear fashion. Unlike some other languages like Java, C#, Python that support multi-threading, where multiple tasks can be executed simultaneously, JavaScript handles one operation at a time.

//Since js is single-threaded it is quite slow but the js engine is not found standalone and ofter integrated with a runtime enviorment like Node js or browser which accelerates the speed by using other techniques.

//Execution context--> it IS a crucial concept in JavaScript that encompasses the environment in which code is executed. It includes information necessary for the code to run, such as variables, scope, the call stack, and the this keyword. Here are key points to cover:

// Scope and Scope Chain: Execution context defines the scope of variables, determining where a variable can be accessed. The scope chain is a list of nested scopes that the interpreter traverses to find the value of a variable.

// Variable Environment: The variable environment is a component of the execution context that holds and manages variables. It includes the mapping between variable names and their current values within a specific scope.

// Lexical Environment: The lexical environment is a broader concept that includes both the variable environment and a reference to the outer lexical environment (outer scope). It is essential for supporting closures in JavaScript.

// This Binding: The execution context also includes information about the value of the this keyword. The binding of this depends on how a function is called and is determined dynamically during runtime.

// Code Execution: The actual execution of the code takes place in the execution phase. Statements are executed one by one, and function calls lead to the creation of new execution contexts, which are managed by the call stack.

// Call Stack: The call stack keeps track of the execution contexts during the program's execution. When a function is called, a new execution context is pushed onto the call stack, and when the function completes, its context is popped off.

// Global Execution Context: The global execution context is the first one created when the script starts running. It sets the stage for the entire program and includes the global object (e.g., window in a browser environment) and the global scope.

// Function Execution Contexts: Each function call creates a new execution context, which includes its own variable environment, scope, and other necessary information. These contexts are added to the call stack.


//Variable enviorment-->  it is a component of the execution context in JavaScript. The variable environment is a data structure that holds and manages the variables within a particular scope. It includes the mappings of variable names to their current values.

//Two types of code written in JS--> Blocking and Non-blocking code

//Blocking code--> the code which blocks the flow of the program if any time consuming task comes in between

//Non-blocking code--> the code which dosen't block the flow of the program and executes the rest of the code concurrently while the time consuming code is running

//Reading or Writing from files in the hard disk or storage or a database are time consuming operations which often leads to blockage as they involve- handling the context to the kernel which then goes to the storage to access the file and thenperforms the operation then again transfers the context to the program after which the output is displayed and sometimes the kernel is preoccupied with other tasks so it also might delay the current task....

// A standalone js engine(example V8 engine) consists of a memory heap and a call stack but since it is single threaded it often used along with an enviorment to provide asynchronous programming so when it is used with browser the browser provides access to a web API that has many async methods and DOM API since DOM is in the web but if the enviorment is Node then it provides access to Node API and no DOM API access is given.

//setTimeOut is a popular method used in async which executes a function after a certain time interval so after that interval the function callback is registered to the task queue which is a queue data structure and it then sends the callbacks to the stack after the interval is completed

//fetch() is another method which handles promises that are higher priority callbacks and are stored and dispatched through a higher order queue that also adds the callbacks to the call stack
