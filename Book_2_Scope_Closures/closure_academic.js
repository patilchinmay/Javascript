function foo(){
    var a = 2;

    function bar(){
        console.log(2);
    }
    return bar;
}

var baz = foo();

baz(); //2 

//Closure is when a function can remember and access its lexical scope even when it is invoked outside its lexical scope. Book 2, Page 51.