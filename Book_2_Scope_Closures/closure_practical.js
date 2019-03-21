function wait(message){
    setTimeout(function timer(){
        console.log(message);
    }, 1000);
}

wait("Hello Closure!");

//Closure is when a function can remember and access its lexical scope even when it is invoked outside its lexical scope. Book 2, Page 51.