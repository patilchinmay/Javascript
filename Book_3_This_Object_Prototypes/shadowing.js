var obj = {
    a:2
}

var myObj = Object.create(obj);

console.log(obj.a);     //2
console.log(myObj.a);   //2

console.log(obj.hasOwnProperty("a"));   //true
console.log(myObj.hasOwnProperty("a")); //false

myObj.a++; // implicit shadowing

console.log(obj.a);     //2
console.log(myObj.a);   //3

console.log(myObj.hasOwnProperty("a")); //true