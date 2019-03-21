//Two common misconceptions about 'this' are that 'this' refers to 1. itself and 2. its scope. Both are wrong.

// In this program, we'll see that 'this' does not refer to its scope.

function foo(){
    var a = 2;
    this.bar();
}

function bar(){
    console.log(this.a);
}

foo(); // ReferenceError: a is not defined.