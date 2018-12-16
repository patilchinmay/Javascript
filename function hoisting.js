var a = 2;

foo();		// Works becasue foo() declaration is hoisted.

function foo(){
	a = 3;

	console.log(a); //3

	var a;		// declaration is hoisted at top of foo.
}

console.log(a);
