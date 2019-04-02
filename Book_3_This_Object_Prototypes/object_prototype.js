function Foo(){
    console.log("I am foo function!");
}

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype);