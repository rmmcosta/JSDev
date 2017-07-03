var arrArr = [[1,0],[3,4,5],"Ana",["A","B","C","D"]]

//console.log(arrArr)

var x = arrArr.reduce((acum, curr) => {
	return acum.concat(curr)
},[])

console.log(x)