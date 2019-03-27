// good tutorial https://www.youtube.com/watch?v=TJpkYvSREtM

function *foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let it = foo();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }