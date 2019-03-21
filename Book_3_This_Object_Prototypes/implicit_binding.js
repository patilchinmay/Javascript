// when a call site has a context object (owning objet or containing object), that context object is the what 'thi' will refer.

function foo(){
    console.log(this.a);
}

var obj = {
    a: 42,
    foo: foo
}

obj.foo(); //42