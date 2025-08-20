class Car {
    constructor(brand){
        this._carname = brand;
    }

    get carname(){
        return this._carname;
    }

    set carname(x){
        this._carname = x;
    }
}

// instasiasi
const mobil1 = new Car('Ferrari');
mobil1.carname = 'Alphard';
console.log(mobil1.carname);