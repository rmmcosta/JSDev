function plus(a,b) {
	return a+b
}

function median(arr) {
	return arr.reduce(plus)/arr.length
}

man = [34, 36]

console.log(median(man))