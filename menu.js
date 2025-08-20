class Menu {
    constructor({ menu, harga, jumlahBeli }) {
        this.jumlahBeli = jumlahBeli;
        this.menu = menu;
        this.harga = harga;
    }

    get menu() {
        return this._menu;
    }

    set menu(namaMenu) {
        if (namaMenu === "Menu 1") {
            this.stock = 20
        } else if (namaMenu === "Menu 2") {
            this.stock = 20
        } else if (namaMenu === "Menu 3") {
            this.stock = 20
        } else if (namaMenu === "Menu 4") {
            this.stock = 20
        } else if (namaMenu === "Menu 5") {
            this.stock = 20
        } else {
            throw new Error(`Tidak ada menu bernama ${namaMenu}`)
        }
        this._menu = namaMenu
    }

    get stock() {
        return this._stock;
    }

    set stock(jumlahStock) {
        if (this.jumlahBeli > jumlahStock) {
            throw new Error(`Jumlah Stock tidak cukup`)
        } else {
            this._stock = jumlahStock;
        }
    }
}

class Transaksi extends Menu {
    constructor(menu, jumlahBeli, TotalBayar) {
        super({ menu: menu, harga: 10000, jumlahBeli: jumlahBeli })
        this.jumlahBeli = jumlahBeli;
        this.Totalbayar = TotalBayar;
    }

    beli() {
        this.sisaStock = this.stock - this.jumlahBeli;
        this.total_harga_barang = this.harga * this.jumlahBeli;
        this.pajak = this.total_harga_barang * 10 / 100;
        this.total_harga = this.total_harga_barang + this.pajak
        this.kembalian = this.Totalbayar - this.total_harga;
        if (this.total_bayar < this.total_harga) {
            return "Mohon maaf uang yang di bayarkan kurang"
        } else {

            return {
                data_pembelian: {
                    menu: this.menu,
                    harga: this.harga,
                    jumlah_beli: this.jumlahBeli,
                    total_harga_barang: this.total_harga_barang,
                    pajak: this.pajak,
                    total_harga: this.total_harga,
                    total_bayar: this.Totalbayar,
                    kembalian: this.kembalian
                },
                sisa_stock: this.sisaStock
            }

        }
    }
}

try {
    const beli1 = new Transaksi("Menu 1", 10, 120000);
    console.log(beli1.beli());
}
catch (e) {
    console.log('Error', e.message);
}