var arr = [{"name":"Ana", "age":34},{"name":"Ric", "age":31}]

var theOne = arr.find(function(person){
  return person.name == "Ana"
})

//console.log(theOne);

var arr = [{"name":"Ana", "age":34,"mother":"Céu"},
{"name":"Ric", "age":31, "mother":"Carmélia"},
{"name":"Céu", "age":62, "mother":""},
{"name":"Carmélia", "age":62, "mother":""}]

var name = "Ric"

function findMother(motherName,name){
  var mother = arr.find(function(element){
    return element.name == (motherName == "?" ? name : motherName)
  })
  //console.log(mother);
  if (mother)
    return findMother(mother.mother,mother.name)
  else
    return name
}

console.log(findMother("?",name));
