class Car {
    constructor(merek) {
        this.merek = merek;
    }

    info(){
        console.log(`Car brand : ${this.merek}`);
    }
}

module.exports = Car;