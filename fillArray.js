function fillArr(arrLen) {
	var arr = new Array()
	for(var i=0; i<arrLen;i++) {
	  arr[i] = parseInt(prompt(`Value ${i}`))
	}
	return arr
}

function forEach(arr, action) {
  myArr.forEach(
  	function(item, index, array) {
	  action(item)
   })
}

function sum(total, inc) {
	return total += inc
}

var arrLen = prompt("Array length:")
myArr = fillArr(arrLen)
forEach(myArr, console.log)
var arrSum=0
forEach(myArr, function(number) {
	  arrSum+=number
  }
)

console.log(arrSum)




