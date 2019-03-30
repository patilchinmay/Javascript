const time = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond

console.log(time);

function foo(){
    console.log("This has been called via a callback after "+ time +" milisecond!");
}

setTimeout(foo, time);

// time variable is resolved inside foo because of traversing the scope chain to find the parameter.