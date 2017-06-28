var x = {
	n : "coiso",
	myArr : ["A", "n", "a"]
}

function arrayEach(arr) {
	arr.forEach(function(value) {
		return value
	})
}

console.log(x)
console.log(x.n)
console.log(x.myArr)
console.log(x.myArr[0])

for(item in x.myArr) //not the best way
  console.log(x.myArr[item])
  
x.myArr.forEach(function(currValue, index) {
	console.log(`value:${currValue}, index:${index}`)
})

x.myArr.forEach(function(curr) {
	console.log(curr)
})

console.log(arrayEach(x.myArr))