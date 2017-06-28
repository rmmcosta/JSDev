var arr = [1,2,3,4,5]
 var x = arr.reduce(function(acum,curr){
 	return acum + curr
 },10)
 
 var y = arr.reduce(function(acum,curr){
 	return acum + curr
 })
 
 console.log(x,y)
 
