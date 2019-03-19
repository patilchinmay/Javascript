var foo;

foo();

function foo(){
    console.log(1);
}

foo = function(){
    console.log(2);
}

//Functions are hoised first and then variables.
//Notice that var foo was a duplicate declaration and thus ignored.