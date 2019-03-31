// async-await works with prmoises. So await should be used in conjuction with the promises.

function add(x,y){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve (x+y);
        }, 2000)
    });   
}

function square(z){
   return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve (z*z);
        }, 2000)
   });
}

function double(w){
    return w+w;
}

let asyncFunction = async() => {
    try{
        let sum = await add(2,4);
        console.log(sum);

        let squared = await square(sum);
        console.log(squared);

        let doubled = double(squared);
        console.log(doubled);

    }catch(err){
        console.error(err);
    }
}

asyncFunction();