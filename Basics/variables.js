//three keywords--> let, const, var

//var-->globally scoped and functionally scoped ; updated and re-defined ; hoisting allowed and initialized with undefined ; can be declared without initialization

//let-->block scoped only ; updated but can't be refined within same scope but within different scopes ; hoisting allowed but can't be initialized ; can be declared without initialozed

//const-->block scoped only ; no updation and re-definition ; hoisting allowed but not initialized ; cannot be declared without initialization

let a=5;
const b=6;
var c=7;

{
    let a =6;
    c=8
    console.log(a+" "+b+" "+c)
}

console.log(a+" "+b+" "+c)
