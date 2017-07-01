var ancestries = require('./ancestry.json')
//console.log(ancestries);

function findOldestAncester(ancesterName, name, degree, father){
  var ancester = ancestries.find(function(element){
    return element.name == (ancesterName == "?" ? name : ancesterName)
  })
  //console.log(ancester);
  if (ancester)
    return findOldestAncester(
      (father == 1 ? ancester.father : ancester.mother),
      ancester.name,
      ++degree, father
    )
  else
    return name + " " + degree + "º"
}

console.log(findOldestAncester("?","Carolus Haverbeke",0,1));
console.log(findOldestAncester("?","Carolus Haverbeke",0,0));
