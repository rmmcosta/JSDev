var arr = [{"n":"Ana","a":34},{"n":"Ric","a":31},{"n":"Rui","a":24},{"n":"Céu","a":61},{"n":"Manuel","a":62}]

//by value
arr.sort(function(personA, personB){
  return personA.a - personB.a
})

console.log(arr);

//by name
arr.sort(function(a, b) {
  var nameA = a.n.toUpperCase(); // ignore upper and lowercase
  var nameB = b.n.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(arr);

var ancestry = require('./ancestry.json')

ancestry.sort(function(personA, personB){
  return personA.born - personB.born
})

console.log(ancestry);
