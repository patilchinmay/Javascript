let printMe = character => {
    console.log(`I am in ${character}`);
    return Promise.resolve();
}


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
// 'I am in A'
// 'I am in B'
// 'I am in C'