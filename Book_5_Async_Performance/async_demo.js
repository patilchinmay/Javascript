time1 = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond
time2 = Math.floor(Math.random() * 3001);     // returns a random integer from 0 to 3000 milisecond

function log1(){
    console.log(`Executed log1 after `+time1+` miliseconds`);
}
function log2(){
    console.log(`Executed log2 after `+time2+` miliseconds`);
}

setTimeout(log1, time1);
setTimeout(log2, time2);