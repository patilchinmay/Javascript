function *add(x,y){
    return x+y;
}

function *square(z){
    return z*z;
}

let it  = add(2,4);

let bar  = it.next();

console.log(bar);

let it2 = square(bar.value);

let foo = it2.next();

console.log(foo);