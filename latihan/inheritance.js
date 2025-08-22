// class Parent {
//     constructor(greeting) {
//         this.greeting = greeting;
//     }

//     parentSay() {
//         console.log(`${this.greeting} ini adalah kelas Parent (orang tua)`)
//     }
// }

// class Child extends Parent {
//     constructor(greetings, name) {
//         super(greetings);
//         this.name = name
//     }

//     childSay() {
//         console.log(`${this.greeting} ini adalah kelas Child (anak), saya ${this.name}`)
//     }
// }

// const parent = new Parent('Hello')
// parent.parentSay();

// const child = new Child("Hai",'Panji')
// child.childSay();

// // Child menggunakan fungsi yg ada di Parent
// child.parentSay();

// Parent
class LuasBangunDatar {
    constructor({ sisi, panjang, lebar, alas, tinggi, radius }) {
        this.sisi = sisi;
        this.panjang = panjang;
        this.lebar = lebar;
        this.alas = alas;
        this.tinggi = tinggi;
        this.radius = radius;
    }
}
 
// Child / Turunan
class Persegi extends LuasBangunDatar {
    constructor(sisi) {
        super({ sisi: sisi })
    }

    hitungLuas() {
        this.luas = this.sisi * this.sisi;
        console.log(`Luas persegi dengan sisi ${this.sisi} adalah : ${this.luas}`)
    }
}

class PersegiPanjang extends LuasBangunDatar {
    constructor(panjang, lebar) {
        super({ panjang: panjang, lebar: lebar });
    }

    hitungLuas() {
        this.luas = this.panjang * this.lebar;
        console.log(`Luas persegi Panjang dengan sisi ${this.panjang} dan lebar ${this.lebar} adalah : ${this.luas}`)
    }
}

class Segitiga extends LuasBangunDatar {
    constructor(alas, tinggi) {
        super({ alas: alas, tinggi: tinggi });
    }

    hitungLuas() {
        this.luas = this.alas * this.tinggi / 2;
        console.log(`Luas segitiga dengan alas ${this.alas} dan tinggi ${this.tinggi} adalah : ${this.luas}`)
    }

}

class Lingkaran extends LuasBangunDatar {
    constructor(radius) {
        super({ radius : radius });
    }

    hitungLuas() {
        this.luas = 3.14 * this.radius ** 2;
        console.log(`Luas Lingkaran dengan radius ${this.radius} adalah : ${this.luas}`)
    }
}

class Jajargenjang extends LuasBangunDatar {
    constructor(alas, tinggi) {
        super({ alas: alas, tinggi: tinggi });
    }

    hitungLuas() {
        this.luas = this.alas * this.tinggi;
        console.log(`Luas Jajargenjang dengan alas ${this.alas} dan tinggi ${this.tinggi} adalah : ${this.luas}`)
    }
}

// instasiasi
const persegi = new Persegi(6);
persegi.hitungLuas()

const persegiPanjang = new PersegiPanjang(2, 4);
persegiPanjang.hitungLuas();

const lingkaran = new Lingkaran(10);
lingkaran.hitungLuas();

const segitiga = new Segitiga(10, 7)
segitiga.hitungLuas();

const jajargenjang = new Jajargenjang(10, 7);
jajargenjang.hitungLuas();