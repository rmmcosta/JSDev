var ancestry = require('./ancestry.json');

//console.log(ancestry.length)

var males = ancestry.filter(function(m){
	return m.sex == "m"
})

//console.log(ancestry.length)
//console.log(males.length)

var females = ancestry.filter(function(f){
	return f.sex == "f"
})

var malesAge = males.map(function(a){
	return a.died - a.born
})

var femalesAge = females.map(function(f){
	return f.died - f.born
})

var malesTotAge = malesAge.reduce(function(acum, iter){
	return acum + iter
})

var femalesTotAge = femalesAge.reduce(function(acum, iter){
	return acum + iter
})

var malesAverageAge = malesTotAge / males.length

var femalesAverageAge = femalesTotAge / females.length

//console.log(ancestry)
console.log(malesAverageAge);
console.log(femalesAverageAge);
