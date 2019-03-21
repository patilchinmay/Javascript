function A(){

    // call stack is: 'A', so call-site is in global scope.
    console.log('A');
    B(); // <-- call-site for B()
}

function B(){
    // call stak is A --> B, so our call site is A

    console.log('B');
    C(); // <-- Call site for C()
}

function C(){
    // Call stack is A --> B --> C, so call site is in B
    
    console.log('C'); 
}

A(); // <-- call site for A