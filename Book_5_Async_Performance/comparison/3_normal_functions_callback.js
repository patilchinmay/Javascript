function a(callback){
    console.log("I am in A");
    callback();
}

function b(callback){
    console.log("I am in B");
    callback();
}

function c(){
    console.log("I am in C");
}

// This is a callback hell. Code is ugly.
a(()=>{
    b(()=>{
        c();
    });
});

// 'I am in A'
// 'I am in B'
// 'I am in C'