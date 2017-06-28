var x = 5
function f1() {
	var x = 3
}

f1()

console.log(x)

function f2() {
	x=7
}

f2()

console.log(x)

var z = 2
{
	let z = 3 //treats z as local to the curly braces block
}

console.log(z)



