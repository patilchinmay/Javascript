// We demonstrate default binding here.  foo is called from global scope. Thus the call stack and call site for it is global scope. Meaning 'this' represents global scope. Thus when called this.a from inside foo, it has access to 'a' as it is in global scope.

function foo(){
    console.log(this.a);
}

var a = 2;

foo();