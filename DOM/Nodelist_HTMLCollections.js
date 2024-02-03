// NodeList and HTMLCollection are both collections of nodes (elements) that you can interact with using JavaScript. They represent sets of nodes obtained from the HTML document.

// NodeList-->
// A NodeList is a collection of nodes returned by various DOM methods such as querySelectorAll or childNodes.
// It is a generic collection that can include different types of nodes, not just elements.
// NodeList is usually a static collection, meaning it doesn't automatically update when the underlying document changes.


// HTMLCollection-->
// An HTMLCollection is a specific type of collection that only contains elements, not other types of nodes.
// It is often returned by properties like children or methods like getElementsByTagName.
// HTMLCollections are live, meaning they are automatically updated when the underlying document changes.

// Both NodeList and HTMLCollection have some common properties and methods, such as the length property to get the number of nodes in the collection and the ability to access individual nodes by index.

// It's important to note that both NodeList and HTMLCollection are array-like objects, but they are not actual JavaScript arrays. If you need to perform array-specific operations on them, you might need to convert them into arrays using methods like Array.from() or Array.prototype.slice.call().


//const myArr=Array.from(NodeList or HTMLCollection)