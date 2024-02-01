// DOM selectors are methods in JavaScript that allow you to select and manipulate HTML elements from the Document Object Model (DOM). Selectors provide a way to locate specific elements on a web page, which can then be accessed or modified using JavaScript.

//document.getElementById() --> helps to access an element in the HTML document by using their ID

document.getElementById('title')

//document.getElementByClassName() --> helps to access elements that have a specific class name

document.getElementsByClassName('title')

//document.getElementById('title').getAttributes('id') -->  returns the value of 'id' attribute for the selected element

document.getElementById('title').getAttribute('innertext')//gets the text inside the title tag

//we can also set the styling properties of the elements

document.getElementById('title').style.backgroundColor='crimson'

//textContent-->  it is used to get or set the content of all child nodes of an element, as a string.
//It does not consider the styling or layout properties set through CSS.
//It does not support HTML. 

//innerText-->  It is used to get or set the text between the opening and closing tags of an element
//It considers the styling and layout properties of the text if any.(Ex- if a text is hidden by display:none that text is not retrieved by innerText)
//It does not support HTML.

//innerHTML-->  It is used to get or set the html code within the start and end tags of an element</
//It supports HTML.

//querySelector-->  This method returns the first Element within the document that matches the specified CSS selector(class, id, attribute, name), or group of selectors

//querySelectorAll-->  This method returns all elements in the document that match a specified selector.