function foo(){
    console.log(this.a);
}

var a = "oops, global";

function test(){
    var a = 'test';
    foo();
}

test(); //oops, global

// Hypothesis: if a function is called inside an another function (containing function), 'this' is implicitly lost. This doesn't happen when the containing entity is an object, but not a function.