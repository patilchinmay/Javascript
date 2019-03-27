// good tutorial https://www.youtube.com/watch?v=TJpkYvSREtM

function *infiniteMaker(){
    let i = 0;

    // generally this while loop will lead to stack overflow. But not in case of generators. yeild acts like an intermediate return statement. It (yeild) pauses the execution of the function whwnever it is called. The execution resumes from the same point whenever the iterator.next is called.
    while(true){
        console.log(`i = ${i}`);
        yield i;
        console.log(`i = ${i}`);
        i++;
        console.log(`i = ${i}`);
    }
}

let it = infiniteMaker();

console.log(`Execeuting first statement`);
console.log(it.next());
console.log(`Execeuting second statement`);
console.log(it.next());
console.log(`Execeuting third statement`);
console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());