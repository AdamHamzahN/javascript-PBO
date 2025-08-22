// interface Animal {
//     nama: string;
//     suara(): void;
// }

// interface Category {
//     deskripsi: string;
// }

// class Cat implements Animal, Category {
//     nama: string;
//     deskripsi: string;

//     constructor(nama: string, deskripsi: string) {
//         this.nama = nama;
//         this.deskripsi = deskripsi;
//     }

//     suara(): void{
//         console.log(`${this.nama} ${this.deskripsi} bersuara nyaaan`);
//     }
// }

// const kucing1 = new Cat("Tom","Mamalia");
// kucing1.suara()
interface VolumeBangunRuang {
    volume(): void
}

interface LuasPermukaanBangunRuang {
    luasPermukaan(): void
}

class BangunKubus implements VolumeBangunRuang, LuasPermukaanBangunRuang {
    sisi: number
    constructor(sisi: number) {
        this.sisi = sisi;
    }
    volume() {
        console.log(`Volume Kubus dengan sisi ${this.sisi} :`, this.sisi ** 3);
    }
    luasPermukaan() {
        console.log(`Luas Permukaan Kubus dengan sisi ${this.sisi} :`, 6 * this.sisi ** 2);
    }
}

class BangunBalok implements VolumeBangunRuang, LuasPermukaanBangunRuang {
    panjang: number;
    lebar: number;
    tinggi: number;
    constructor(panjang: number, lebar: number, tinggi: number) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;

    }
    volume() {
        console.log(`Volume Balok dengan Panjang ${this.panjang}, Lebar ${this.lebar} dan Tinggi ${this.tinggi} :`, this.panjang * this.lebar * this.tinggi);
    }

    luasPermukaan() {
        console.log(`Luas Permukaan Balok dengan Panjang ${this.panjang}, Lebar ${this.lebar} dan Tinggi ${this.tinggi} :`, 2 * (this.panjang * this.lebar + this.panjang * this.tinggi + this.lebar * this.tinggi));
    }
}

class BangunTabung implements VolumeBangunRuang, LuasPermukaanBangunRuang {
    radius: number;
    tinggi: number;
    constructor(radius: number, tinggi: number) {
        this.radius = radius;
        this.tinggi = tinggi;
    }
    volume() {
        console.log(`Volume Tabung dengan Radius ${this.radius} dan Tinggi ${this.tinggi} :`, 3.14 * this.tinggi * this.radius ** 2);
    }
    luasPermukaan() {
        console.log(`Luas Permukaan Tabung dengan Radius ${this.radius} dan Tinggi ${this.tinggi} :`, 2 * 3.14 * this.radius * (this.radius + this.tinggi));
    }
}

const kubus1: any = new BangunKubus(2);
kubus1.volume();
kubus1.luasPermukaan();

const balok1 = new BangunBalok(2, 3, 4);
balok1.volume();
balok1.luasPermukaan();
const tabung1 = new BangunTabung(10, 20)
tabung1.volume();
tabung1.luasPermukaan();