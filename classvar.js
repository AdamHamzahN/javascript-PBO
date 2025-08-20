// cara 1
var Car = class {
    constructor(brand) {
        this.brand = brand;
    }
}

// instatiasi 
var mobil1 = new Car('Hyundai');
console.log(mobil1);

// cara 2
var Car = class Car2 {
    constructor(brand) {
        this.brand = brand;
    }
}

var mobil2 = new Car('Supra');
console.log(mobil2);

