//Two common misconceptions about 'this' are that 'this' refers to 1. itself and 2. its scope. Both are wrong.

// In this program, we'll see that 'this' does not refer to itself

function foo(num){
    console.log("foo: "+num);

    this.count++;
    // Here, 'this' will not refer to the function foo (itself).
}

foo.count = 0;

var i;

for(i=0; i<10; i++){
    if(i>5){
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// How many times was 'foo' called?

console.log(foo.count); // 0 -- WTF?
