// class Car {
//     constructor(brand){
//         this._carname = brand;
//     }

//     get carname(){
//         return this._carname;
//     }

//     set carname(x){
//         this._carname = x;
//     }
// }

// // instasiasi
// const mobil1 = new Car('Ferrari');
// mobil1.carname = 'Alphard';
// console.log(mobil1.carname);
// console.log(mobil1._carname);


class Car {
    #carname;
    constructor(brand){
        this.#carname = brand;
    }

    get carname(){
        return this.#carname;
    }

    set carname(x){
        this.#carname = x;
    }
}

// instasiasi
const mobil1 = new Car('Ferrari');
console.log(mobil1.carname);
console.log(mobil1.#carname);

