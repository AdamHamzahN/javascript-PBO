// class Car {
//     //method
//     sound() {
//         return "vroomm... bip.. bip..."
//     }
// }

// // instansiasi
// var mobil1 = new Car();
// console.log(mobil1.sound());

//     //method dengan parameter
// class Car {
//     //method dengan parameter
//     sound(x) {
//         return x + ", suara mobil saya vromm.. bip.. bip..";
//     }
// }

// var mobil2 = new Car();
// console.log(mobil2.sound("Woi"));

// tipe data, control progeam di class
class Car{
    constructor(kecepatan){
        this.kecepatan = kecepatan;
    }

    get kecepatan(){
        return this._kecepatan;
    }
    set kecepatan(jumlah){
        if(jumlah < 0 ){
            console.log("kecepatan tidak boleh negatif");
        }
    }

    
    info(){
        console.log(`mobil memiliki kecepatan ${this.kecepatan} km/jam`);

        if(this.kecepatan > 0){
            console.log(`Mobil sedang berjalan`)
        }else{
            console.log("Mobil sedang berhenti");
        }
    }
}

const mobil1 = new Car(-180);
// const mobil2 = new Car(0);

mobil1.info();
// mobil2.info();

