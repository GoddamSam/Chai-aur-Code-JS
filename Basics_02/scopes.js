//scopes are three types--> global scope , functional scope , local scope


if(true){
    let a=6
    const b=7
    var c=8
}
 //console.log(a);
 //console.log(b);
 console.log(c);

 //hence, only var types are globally scoped and let and const are block scoped

 var c=7
 if(true){
    let a=6
    const b=7
    var c=8
}

//since, var types are always globally scoped using them inside blocks becomes difficult since they get updated if variable names are same and pose problems i.e, let and const types are prefered

//***Note***-->the scopes are different in node enviorment and browser's execution enviorment