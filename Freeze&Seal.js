// Object.freeze()
const car = {
    name : "Skoda",
    color : "Grey"
}

Object.freeze(car);
car.name = "Hyundai"
car.modelYear = "2010"

console.log(car)

// Object.seal()
const bus = {
    name : "Tata",
    color : "White"
}

Object.seal(bus)
bus.name = "Mahindra"  //Can be changed
bus.modelYear = "2010" //New prop cannot get added
console.log(bus);