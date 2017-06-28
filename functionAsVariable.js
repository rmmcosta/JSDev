var x = function() {
	console.log("x")
}

x
x()

x = function() {
	console.log("y")
}

x()

y = function() {
	return "y"
}

console.log(y()+"y")
