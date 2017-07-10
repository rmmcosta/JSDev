var obj = {
	"a":[3],
	"m":0
}

var obj2 ={
		"c":21,obj
}

console.log(obj2)

if(obj2.c==21)
  obj2.obj.a.push(4)

console.log(obj2)

obj2.obj.m = obj2.obj.a.reduce((a,c)=>{
	return a+c
})

console.log(obj2)