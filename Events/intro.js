//In JavaScript, events are actions or occurrences that happen in the browser, typically as a result of user interactions or other system events. JavaScript allows you to handle and respond to these events by attaching event listeners to specific elements in the HTML document. When an event occurs, the associated event listener executes a function, allowing you to perform custom actions in response to the event.
//Ex- mouse clicks, keyboard typing, form events or window or document events like refresh or parsing, etc.


//adding onclick attribute to html tags is a less optimsed approach in terms of scaling in js but in react adding onclick to buttons directly is more feasible

//adding onclick to js file by doucment.getelementById is also not an optimsed approach since onclick gives limited info about the event
//doucument.getElementById('btn').onclick=()=>{
//     alert('onclick property used');
// }
//but here we can assign only one callback function to the element but with eventlisteners we can add multiple functions to the element but in this case the latest function will overwrite all the previous ones

//using addeventlisteners is best approach  to handle these types of events in modern browsers

//types,timestamp,prevent default,target,to element,source element,currentTarget

//clientx/y--> gives the x and y coordinates relative to the client area where the event(mainly mouse events) occured and by client area I mean the available viewport(part of the website that is currently visible in the screen)

//screenx/y-->gives the x and y coordinates of the event(mainly mouse events) relative to the actual device screen edge so the difference would be visible when the browser window is minimized or when the webpage is not occupying the entire screen

//pagex/y--> gives the x and y coordinates relative to the entire area where the event(mainly mouse events) occured and by entire area I mean the entire webpage including the part that is not visible and has to be accessed using scrollbar

//tiltx/y--> gives the angle in degrees between the x-z plane or the y-z plane and the screen where the event is taking place(pointer events); this is mainly applicable for stylus usage where the angle between the point of contact of the stylus on the screen w.r.t x-z and y-z plane are returned in degrees

//offsetx/y--> gives the x and y coordinates of the event(mainly mouse events) relative to the padding edge of the target element to which the  listener has been added

//altkey--> gives a boolean value depending on whether the alt key is pressed or not when the event(mainly mouse events) takes place

//ctrlkey--> gives a boolean value depending on whether the ctrl key is pressed or not when the event(mainly mouse events) takes place

//shiftkey--> gives a boolean value depending on whether the shift key is pressed or not when the event(mainly mouse events) takes place


//Event propagation refers to the mechanism by which events are transmitted or "propagated" through the DOM (Document Object Model) hierarchy during the event-handling process in JavaScript. When an event occurs, such as a user clicking a button or pressing a key, the event doesn't necessarily target just the element directly involved. Instead, it can propagate through various phases, involving multiple elements along its path.

// There are two main phases of event propagation in the DOM:

// Capturing Phase:

// During this phase, the event travels from the root of the DOM hierarchy down to the target element.
// Event listeners attached to elements during the capturing phase will be triggered before the event reaches its target.
// Target (or At) Phase:

// The event reaches the target element, and event listeners attached to the target element are triggered.
// Bubbling Phase:

// After the target phase, the event then bubbles up from the target element back to the root of the DOM.
// Event listeners attached to elements during the bubbling phase will be triggered in the reverse order of the DOM hierarchy, starting from the target element's parent and moving up.

document.getElementById('btn').addEventListener('click',(e)=>{
    console.log('The button is clicked!');
    e.stopPropagation();
},false);

document.querySelector('body').addEventListener('click',(e)=>{
    console.log('The body is clicked!');
},false);

//So, in thissyntax of event listener there is an additional boolean parameter which is by default false and the false indicates event bubbling i.e, the event will propagate from the target elelement to the root element in the DOM hierarchy triggering every event listener along the way and true value indicates event capturing where the same will happen starting from the root element to the target 

//preventpropagation method of event object can be used to stop the propagation from the target element

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log('the link is clicked');
},false);

//preventdefault function can be used to prevent the default action like form submissions, website redirecting by link clicks,etc.

document.querySelector('#btn').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
});

//in this case if I want to delete the contents only if I click the button then the if statement is necessary cause if i press the link then also its parent node i.e, body is getting accessed and it is getting removed thus deleting all its child nodes- button and link as well. So, event has an attribute as tagname which gives the type of element that has triggered the event so that is used to conditionally activate the callback functions in the eventlisteners
