function *foo(){
    console.log(`Starting foo()`);
    yield 3;
    yield 4;
    console.log(`Finished foo()`);
}

function *bar(){
    yield 1;
    yield 2;
    yield *foo();
    yield 5;
}

let it = bar();

console.log(`1: `+it.next().value); 
console.log(`2: `+it.next().value);
console.log(`3: `+it.next().value);
console.log(`4: `+it.next().value);
console.log(`5: `+it.next().value);