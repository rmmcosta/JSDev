var arr = [{"name":"ana", "born":1983,"year":new Date().getFullYear()},
{"name":"rui", "born":1992,"year":new Date().getFullYear()}
]

var arrAge = arr.map(function(x){
	return x.year - x.born
})

console.log(arrAge)
