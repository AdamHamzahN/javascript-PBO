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

class LuasBangunDatar {
    constructor(sisi, panjang, lebar, alas, tinggi) {
        this.sisi = sisi;
        this.panjang = panjang;
        this.lebar = lebar;
        this.alas = alas;
        this.tinggi = tinggi;
    }
}

class Persegi extends LuasBangunDatar {
    constructor(sisi) {
        super(sisi);
    }

    hitungLuas() {
        this.luas = this.sisi * this.sisi;
        console.log(`Luas persegi dengan sisi ${this.sisi} adalah : ${this.luas}`)
    }
}

class PersegiPanjang extends LuasBangunDatar {
    constructor(panjang, lebar) {
        super(panjang, lebar);
    }

    hitungLuas() {
        this.luas = this.panjang * this.lebar;
        console.log(`Luas persegi Panjang dengan sisi ${this.panjang} dan lebar ${this.lebar} adalah : ${this.luas}`)
    }
}

class Segitiga extends LuasBangunDatar {

}

class Lingkaran extends LuasBangunDatar {

}

class Jajargenjang extends LuasBangunDatar {

}

// instasiasi
const persegi = new Persegi(2);
persegi.hitungLuas();

const persegiPanjang = new PersegiPanjang(2,4);
persegiPanjang.hitungLuas();