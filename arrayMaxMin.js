var arr = [3,2,7,4,5]
 var min = arr.reduce(function(a,b){
 	if(b<a)
 	  return b
 	return a
 })
 
 var max = arr.reduce(function(a,b){
 	if(b>a)
 	  return b
 	return a
 })
 
 console.log(min,max)
