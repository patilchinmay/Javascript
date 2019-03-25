// Sample demo of promise syntax.

var PromiseDemo = new Promise(function(resolve, reject){
    console.log("This function is going to execute asynchronously!");

    var flag = true;

    if(flag){
        resolve(flag);
    }else{
        reject(flag);
    }
});


PromiseDemo.then(function(flag){
    console.log(`The flag is ${flag}`);
}).catch(function(flag){
    console.log(`The flag is ${flag}`);
})