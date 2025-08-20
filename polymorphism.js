// // Overiding / Menimpa
// class Vehicle {
//     sound() {
//         console.log("This vehicle make a sound");
//     }
// }

// class Car extends Vehicle {
//     sound() {
//         console.log("Suara mobil bip.. bip...");
//     }
// }

// class Bike extends Vehicle {
//     sound() {
//         console.log("Suara motor tin.. tin...");
//     }
// }


// const alphard = new Car();
// alphard.sound();

// const mobil = new Vehicle();
// mobil.sound()

// const beat = new Bike();
// beat.sound();


// // Overloading
// class TypeNumber {
//     constructor(number) {
//         this.number = number
//         if (typeof number === "string") {
//             this.keterangan = `ini bukan angka, tapi string : ${number}`;
//         } else {
//             this.keterangan = `ini adalah angka : ${number}`;
//         }
//     }
//     info(){
//         console.log(this.keterangan);
//     }
// }


// const number1 = new TypeNumber("2");
// number1.info();

class BangunRuang {
    volume() {
        console.log(`Belum ada Bangun Ruang yang dipilih`)
    }
}

class Kubus extends BangunRuang {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }
    volume() {
        console.log(`Volume Kubus dengan sisi ${this.sisi} :`, this.sisi ** 3);
    }
}

class Balok extends BangunRuang {
    constructor(panjang, lebar, tinggi) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;

    }
    volume() {
        console.log(`Volume Balok dengan Panjang ${this.panjang}, Lebar ${this.lebar} dan Tinggi ${this.tinggi} :`, this.panjang * this.lebar * this.tinggi);
    }
}

class Tabung extends BangunRuang {
    constructor(radius, tinggi) {
        super();
        this.radius = radius;
        this.tinggi = tinggi;
    }
    volume() {
        console.log(`Volume Tabung dengan Radius ${this.radius} dan Tinggi ${this.tinggi} :`, 3.14 * this.tinggi * this.radius ** 2);
    }
}

const kubus = new Kubus(2);
kubus.volume();

const balok = new Balok(2,3,4);
balok.volume();

const tabung = new Tabung(10,20)
tabung.volume();