function x(y, then) {
	if(y==0)
	  then()
}

x(1)
x(0, function(){
	console.log("hi")
})
