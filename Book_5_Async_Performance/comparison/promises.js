let printMe = character => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`I am ${character}`);
        resolve();
    }, Math.floor(Math.random * 2000) + 1);
});
  

printMe("A").then(()=>{
    printMe("B").then(()=>{
        printMe("C")
    })
});

// Promise Chaining
// printMe("A")
//   .then(()=>printMe("B"))
//   .then(()=>printMe("C"));

// Output
// 'I am A'
// 'I am B'
// 'I am C'