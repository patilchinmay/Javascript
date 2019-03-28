// tip for async execution: call iterator.next() wherever you would normally call resolve() if it were written with promises.

function add(x,y){
    setTimeout(function(){
         it.next(x+y);
    }, 2000);   
}

function square(z){
    setTimeout(function(){
        it.next(z*z);
   }, 2000);
}

function double(w){
    return w+w;
}

function *generatorFunction(){
    try{
        let sum = yield add(2,4);
        console.log(sum);

        let squared = yield square(sum);
        console.log(squared);

        let doubled = double(squared);
        console.log(doubled);

    }catch(err){
        console.error(err);
    }
}

let it = generatorFunction();

it.next(); // Start the async execution