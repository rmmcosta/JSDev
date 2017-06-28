function args() {
	var obj ={}
	console.log(obj)
	var arr = new Array()
	console.log(arr)
	console.log(`arguments:${arguments.length} (${arguments})`)
	for(var x in arguments)
	  console.log(arguments[x])
}


args(5,"A","r")