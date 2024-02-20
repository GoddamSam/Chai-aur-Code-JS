// DOM stands for Document Object Model. It is a programming interface for web documents, and it represents the structure of a document as a tree of objects. In the context of web development, the document typically refers to an HTML or XML document.

//It is not a part of raw or core js which only has some basic loops, arithmetic operators, functions,etc... The methods and properties of DOM manipulation is provided by DOM API that is injected by the runtime environment i.e, browser or node for extended functionalities.

// The DOM provides a way for programs (usually written in JavaScript) to interact with the structure, style, and content of HTML or XML documents. It allows scripts to dynamically update, add, or delete elements and attributes on a web page. The DOM also provides a standardized way for different programs and scripts to access and manipulate the content of a document.

// Key points about the DOM:

// Tree Structure: The DOM represents the document as a tree structure, where each node in the tree corresponds to an element, attribute, or piece of text in the document.

// Document Object: The top-level object in the DOM is the "document" object, which represents the entire HTML or XML document.

// Nodes: Elements, attributes, and text content are represented as nodes in the DOM tree. Elements are organized hierarchically, with parent-child relationships.

// Dynamic Interaction: JavaScript can be used to dynamically interact with the DOM. This includes manipulating elements, changing styles, handling events, and updating content without requiring a page reload.

// Cross-Platform: The DOM provides a standardized interface for different programming languages and is supported by modern web browsers. This allows developers to write code that works across different browsers.


// The window object represents the browser window or the global context in which the JavaScript code is running. It is a top-level object that contains various properties and methods related to the browser environment. While it's not part of the DOM specification, the window object interacts closely with the DOM, and it's often used to access the global context in a browser environment.

// Key properties and methods of the window object include:

// window.document: Represents the DOM document object.
// window.location: Provides information about the current URL.
// window.alert(): Displays an alert dialog with a specified message.
// window.setTimeout(): Executes a function or a specified piece of code once after a specified delay.

// Keep in mind that the window object is specific to browser environments. If you are working with JavaScript in a different environment (e.g., Node.js), you won't have a window object, but you might have other global objects or contexts specific to that environment.