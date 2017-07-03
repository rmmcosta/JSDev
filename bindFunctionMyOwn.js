var arr = ["Ana", "Ric", "Rui"]
var obj = [{"name":"Ana","age":34},
   {"name":"Joana","age":34},
   {"name":"Rui","age":24}]

function isInSet(set,person) {
	return set.indexOf(person.name) > -1
}

console.log(obj.filter(function(elem){
	return isInSet(arr, elem)
}))

console.log(obj.filter(isInSet.bind(null, arr)))
