function x(f) {
	console.log(f)
	return function(arg) {
		console.log(arg+f)
		return "coiso"
	}
}

y = x(5)
console.log(y)
console.log(y(7))