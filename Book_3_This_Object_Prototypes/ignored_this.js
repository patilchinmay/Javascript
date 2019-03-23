function foo(){
    console.log(this.a);
}

var a  = 2;

foo.call(null); //2

// Explicit binding doesn't work when call is passed with null as parameter. This is known as Ignores this (at least in book).