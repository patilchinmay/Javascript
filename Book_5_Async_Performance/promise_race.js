console.log("Start of the program!");

time1 = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond
time2 = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond
time3 = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond

p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log(`Printed from p1 at ${time1}`);
        resolve("p1");
    }, time1);
    
});    

p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log(`Printed from p2 at ${time2}`);
        resolve("p2");
    }, time2);
    
});

p3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log(`Printed from p3 at ${time3}`);
        resolve("p3");
    }, time3);
    
});

Promise.race([p1, p2, p3]).then((msg)=>{
    console.log(`Resolved Promise: ${msg}`);
});

// Promise.race is used to execute all promises in parallel. It waits for first promise to finish execution and then executes the code in 'then' section.
