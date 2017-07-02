class Vehicle {
  constructor(color) {
    this.color = color
  }

  buzz() {
    console.log("Buzz, buzz, buzz");
  }
}

var carro1 = new Vehicle("blue")
var carro2 = new Vehicle("red")

carro1.buzz()

console.log(carro1.color)

carro2.buzz()

console.log(carro2.color)
