function Foo(){
    console.log("I am foo function!");
}

console.log(Foo.prototype.constructor === Foo);

var a = new Foo();

console.log(a.constructor === Foo);