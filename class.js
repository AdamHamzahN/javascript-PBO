class Car {
    constructor(brand) {
        this.brand = brand;
    }

}

// instantiate the class (inisialisasi class)
const mobil1 = new Car('Honda');

// console.log(mobil1);

// instantiate the second object (inisialisasi object kedua)
const mobil2 = new Car('Toyota');

// console.log(mobil2.roda);

class Peserta {
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }

    info() {
        if (this.nilai >= 90) {
            this.grade = 'A'
        } else if (this.nilai >= 80) {
            this.grade = 'B'
        } else if (this.nilai >= 70) {
            this.grade = 'C'
        } else if (this.nilai >= 60) {
            this.grade = 'D';
        } else if (this.nilai >= 0) {
            this.grade = "Tidak Lulus"
        } else {
            return "Nilai tidak valid";
        }

        return {
            nama: this.nama,
            umur: this.umur,
            proglat: this.proglat,
            nilai: `${this.nilai} grade ${this.grade}`
        }
    }

    get nilai() {
        return this._nilai;
    }

    set nilai(besarNilai) {
        if (besarNilai < 0) {
            throw Error("Nilai tidak boleh negatif");
        } else if (besarNilai > 100) {
            throw Error("Nilai tidak boleh lebih besar dari 100");
        } else {
            this._nilai = besarNilai;
            // console.log(this.info())
        }
    }


}

try {
    const peserta1 = new Peserta('Adam Hamzah Nurwahyudi', 18, "Pengembangan Web dengan React dan NodeJs", -100)
    console.log(peserta1.info())
} catch (e) {
    console.log(e.message);
}

