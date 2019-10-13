function a(callback){
    setTimeout(()=>{
        console.log("I am in A");
        callback();
    }, Math.floor(Math.random() * 2000) + 1);
}

function b(callback){
    setTimeout(()=>{
        console.log("I am in B");
        callback();
    }, Math.floor(Math.random() * 2000) + 1);
}

function c(){
    setTimeout(()=>{
        console.log("I am in C");
    }, Math.floor(Math.random() * 2000) + 1);
}

// This is a callback hell. Code is ugly.
a(()=>{
  b(()=>{
    c();
  })
});


// Output is the same everytime
// 'I am in A'
// 'I am in B'
// 'I am in C'