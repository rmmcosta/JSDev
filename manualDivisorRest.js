function findDivisor(num, divisor, initialNum) {
	if(num == 0)
	  return divisor
	else if(num<0) {
	  return findDivisor(initialNum, ++divisor, initialNum)
	}
	else {
	    return findDivisor(num-divisor, divisor, initialNum)
	}
}

do {
	var x = Number(prompt("Say a number!",""))
	alert(findDivisor(x,2,x))
} while(x!=0)