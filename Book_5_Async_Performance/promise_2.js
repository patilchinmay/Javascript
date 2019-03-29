// Sample demo of promise syntax. Note that promise executes on its own without a execution call unlike a function 'example()'. Promise is executed whenever the control reaches the point in code where it is declared.

console.log(`Beginning of program!`);

var PromiseDemo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("This function is going to execute asynchronously!");

        var flag = true;

        if(flag){
            resolve(flag);
        }else{
            reject(flag);
        }
    }, 3000);
});


// PromiseDemo.then(function(flag){
//     console.log(`The flag is ${flag}`);
// }).catch(function(flag){
//     console.log(`The flag is ${flag}`);
// })

console.log(`End of program!`);