function foo(){
    console.log(this.a);
}

var obj = {
    a : 2,
    foo: foo
}

var bar = obj.foo; //function reference / alias

var a = "oops, global";

bar();


// Even though bar appears to be a reference to obj.foo, infact it is just a reference to foo. Also, bar is call from global scope thus 'this' has gloabl scope.