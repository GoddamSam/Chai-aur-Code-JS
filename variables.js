//three types of keywords for declaring variables-->let,const and var

//var-->globally and functionally scoped ; updated and re-defined ; hoisting allowed and initialized with undefined ; can be declared without initialization

//let-->only block scoped ; updated but not re-defined within same blocks but in different blocks ; hoisting allowed but not initialized ; can be declared without initialization

//const-->only block scoped ; cannot be updated or re-defined  ; hoisting allowed but not initialized ; cannot be declared without initialization

//*** Preferable to use let and const and not var while declaring variables

let a=5
const b=6
var c=7

{
    let a=6
    c=8
    console.log(a+" "+b+" "+c)
}

//var variables will always get updated whether the updation is being taking place in global scope or functional scope as long as same variable name is used

//let variables need to be redefined inside the block scopes to distinguish them from same named variables in global scopes otherwise their values get updated just like var types

//const types can only be declared and initialized once so easiest to work with

console.log(a+" "+b+" "+c)
