console.log("Start of the program!");

let p1 = new Promise(function(resolve, reject){
    console.log("Printed from p1");
    resolve("p1");
});

let p2 = new Promise(function(resolve, reject){
    console.log("Printed from p2");
    resolve("p2");
});

Promise.all([p1, p2]).then((msg)=>{
    console.log(`Resolved Promises: ${msg}`);
    console.log("Both promises have been resolved!")
});

// Promise.all is used to execute all promises in parallel. It waits for all promises to finish execution and then executes the code in 'then' section.

// Start of the program!
// Printed from p1
// Printed from p2
// Resolved Promises: p1,p2
// Both promises have been resolved!