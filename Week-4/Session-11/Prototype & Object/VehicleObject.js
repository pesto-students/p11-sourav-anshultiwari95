class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getDetails() {
        return `${super.getDetails()}, Number of Doors: ${this.numDoors}`;
    }
}


const vehicle = new Vehicle("Tata", "Harrier", 2020);
const car = new Car("Toyota", "Glanza", 2021, 4);


console.log(vehicle.getDetails());
console.log(car.getDetails());
