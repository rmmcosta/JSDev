var manAge = [34,22,31,40,55]
 var manAgeTot = manAge.reduce(function(acum,curr){
 	return acum + curr
 })
 
 console.log(manAgeTot)
 console.log(manAgeTot/manAge.length)