var arr = [
  {"n":"Ana","a":34,"m":"Céu","p":null},
  {"n":"Ric","a":31,"m":"Carmélia","p":"Manuel"},
  {"n":"Rui","a":24,"m":"Carmélia","p":"Manuel"},
  {"n":"Céu","a":61,"m":null,"p":null},
  {"n":"Manuel","a":62,"m":"Sampaia","p":"Costa"}
]

var ancestors = arr.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + ",(" + currentValue.p + "," + currentValue.m + ")"
},"")

console.log(ancestors);

ancestors = require('./ancestry.json')

ancestors = ancestors.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + ",(" + currentValue.father + "," + currentValue.mother + ")"
},"")

console.log(ancestors);
