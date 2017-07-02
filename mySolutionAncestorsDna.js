var ancestry = require('./ancestry.json')

var byName = {}

ancestry.forEach(function(person){
  byName[person.name] = person
})

function findAncester(person,fatherSide,motherSide) {
  fatherSide = []
  motherSide = []
  function returnAncester(person) {
    //console.log(person);
    if(!person) {
      //console.log("x");
      return "father side:" + fatherSide + ", " + "mother side" + motherSide
    }
    else {
      fatherSide.push(person.father)
      motherSide.push(person.mother)
      return (returnAncester(byName[person.father]),
      returnAncester(byName[person.mother]))
    }
  }
  return returnAncester(person)
}

var ph = byName["Philibert Haverbeke"];

console.log(findAncester(ph));
