var ancestry = require('./ancestry.json')

ancestry.sort(function(personA, personB){
  return personA.born - personB.born
})

console.log(ancestry);

var ancestryByName = {}

ancestry.forEach(function(person){
  ancestryByName[person.name] = person
})

var lastAncesters = ancestry.filter(function(person){
  return (person.father == null || person.mother == null)
})

console.log(lastAncesters);
