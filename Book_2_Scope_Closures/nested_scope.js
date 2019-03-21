function foo(a){
	console.log(a+b);
}

var b = 4;

foo(2);

// Engine starts at the current executing scope, looks for the variable there, then if not found, keeps going one level up, and so on. if the outermost global scope is reached, the search stops, whether it finds the variable or not.