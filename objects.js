var people = {}

console.log(people)

var ana = {name:"Ana Ramos", age:34}
var ricardo = {name:"Ricardo Costa", age:31}

people["ana"] = ana

if(ana in people)
  console.log(people[ana].age)
console.log(people)

Object.assign(people, ricardo)

console.log(people)

console.log(people.ana.name)

for (var prop in people) {
	var x = people[`${prop}`]
	console.log(`${prop}`)
	console.log(x)
  for (var prop2 in x) {
  	  console.log(x[`${prop2}`])
    }
}
