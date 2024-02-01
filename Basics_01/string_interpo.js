//string interpolation is a method of displaying variables and their values
//it is applied through back ticks and dollar sign
//it works normal for primitives but for non primitives it calls the toString function which returns the reference of the non primitives not the actual values so JSON.stringify function has to be used to convert the values into string and then display them through string interpolation
//only array works fine and set and maps don't get converted to serializable data even by JSON.stringify so they need to be converted to arrays then displayed thorugh interpolation

//Example
let name='Samaroho'

console.log(`My name is:-${name}`);