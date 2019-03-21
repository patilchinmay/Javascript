function foo(){
    console.log(this.a);
}

var obj2 = {
    a : 42,
    foo: foo
}

var obj1 = {
    a : 2,
    obj2: obj2
}

obj1.obj2.foo(); //42

// Only top/last level of object ptoperty reference chain matters to call-site.