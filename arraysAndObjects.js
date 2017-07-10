var arr=[]
var obj ={
	
}

objx = "x"
objv =[1,2,3]

obj[objx]=objv

console.log(obj)

arr.push(obj)

console.log(arr)

obj.tot=obj[objx].reduce((a,c)=>{
	return a+c
})

arr[obj]=obj

console.log(arr)