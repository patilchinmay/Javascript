function a(){
    setTimeout(()=>{
        console.log("I am in A");
    }, Math.floor(Math.random() * 2000) + 1);
}

function b(){
    setTimeout(()=>{
        console.log("I am in B");
    }, Math.floor(Math.random() * 2000) + 1);
}

function c(){
    setTimeout(()=>{
        console.log("I am in C");
    }, Math.floor(Math.random() * 2000) + 1);
}

a();
b();
c();

// Random output every time
// 'I am in C'
// 'I am in A'
// 'I am in B'