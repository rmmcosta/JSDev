var arrData = [{
	"c" : 21, "a":76
},{
	"c" : 20, "a":73
},{
	"c" : 20, "a":75
},{
	"c" : 21, "a":65
}
]

var masterObj ={
	
}

arrData.forEach((elem)=>{
	if(!masterObj[elem.c]){
		masterObj[elem.c]={"c":	
		elem.c,"a":[],"m":0}
	}
		//console.log(elem.a)
		//console.log(masterObj)
		//console.log(masterObj[elem.c])
		masterObj[elem.c].a.push(elem.a)
})

console.log(masterObj)

for(obj in masterObj){
	masterObj[obj].m = masterObj[obj].a.reduce((a,c)=>{
		return a+c
	})/masterObj[obj].a.length
}

console.log(masterObj)


/*
var obj = {
	"a":[3],
	"m":0
}

var obj2 ={
		"c":21,obj
}

var x = "c"

console.log(obj2[x])

/*console.log(obj2)

if(obj2.c==21)
  obj2.obj.a.push(4)

console.log(obj2)

obj2.obj.m = obj2.obj.a.reduce((a,c)=>{
	return a+c
})

console.log(obj2)*/
    