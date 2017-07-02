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

function findOldestAncester2(ancesterName, name, degree, sex, dna){
  //console.log(ancesterName + " " + name + " " + degree + " " + sex);
  var ancester = ancestries.find(function(element){
    return element.name == (ancesterName == "?" ? name : ancesterName)
  })
  console.log(
    (ancester ? "name: " + ancester.name + " father: " + ancester.father : "---")
     + " | " +
    (ancester ? "name: " + ancester.name + " mother: " + ancester.mother : "---")
  );
  if (ancester) {
    ++degree;
    return findOldestAncester2(
      ancester.mother,
      ancester.name,
      degree,
      "lado 1"
    ) && findOldestAncester2(
      ancester.father,
      ancester.name,
      degree,
      "lado 2"
    )}
  else {
    ++degree
    return ancesterName + " " + degree + "º"
  }
}

console.log(findOldestAncester2("?","Carolus Haverbeke",0,""));
