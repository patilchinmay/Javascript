let time1 = Math.floor(Math.random() * 1000) + 1;     // returns a random integer from 1 to 1000 milisecond
let time2 = Math.floor(Math.random() * 1000) + 1;     // returns a random integer from 1 to 1000 milisecond
let time3 = Math.floor(Math.random() * 1000) + 1;     // returns a random integer from 1 to 1000 milisecond
let time4 = Math.floor(Math.random() * 1000) + 1;     // returns a random integer from 1 to 1000 milisecond
let time5 = Math.floor(Math.random() * 1000) + 1;     // returns a random integer from 1 to 1000 milisecond

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(`Printed from a at ${time1}`);
      resolve();
    }, time1);
  });
}

let b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(`Printed from b at ${time2}`);
      resolve();
    }, time2);
  });
}

let c = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(`Printed from c at ${time3}`);
      resolve();
    }, time3);
  });
}

let d = () => {
  setTimeout(()=>{
      console.log(`Printed from d at ${time4}`);
    }, time4);
}

let e = () => {
  setTimeout(()=>{
      console.log(`Printed from e at ${time5}`);
    }, time5);
}

async function printAll(){
  await a();
  await b();
  await c();
  await d();
  await e();
}

printAll();

// Output
// a,b,c will always be printed in order
// c,d will be executed in random order depending on time4, time5

// a,b,c are functions which return promises, thus making their execution (in the lack of better word) synchronous. 
// c,d are normal asynchronously executing functions.

// 'Printed from a at 371'
// 'Printed from b at 63'
// 'Printed from c at 700'
// 'Printed from e at 215'
// 'Printed from d at 646'