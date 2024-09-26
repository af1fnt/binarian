// 1 dan 2
class Laptop {
    constructor(brand, type, password) {
        this.brand = brand;
        this.type = type;
        this.#encryptedPassword = this.#encrypt(password);
    }
    #encrypt = (password) => {
        return `encrypted-version-of-${password}`;
    }
    #encryptedPassword;
    #decrypt = () => {
        return this.#encryptedPassword.split('encrypted-version-of-')[1];
    }
    updatePassword(newPassword) {
        this.#encryptedPassword = this.#encrypt(newPassword);
        console.log("Password has been updated!");
    }
    getPassword() {
        return this.#decrypt();
    }
    info() {
        return `Brand: ${this.brand}, type: ${this.type}`;
    }
    run() {
        return `${this.brand} ${this.type} is on!`;
    }
}

class LaptopGaming extends Laptop {
    constructor(brand, type, password) {
        super(brand, type, password);
    }
    info() {
        return `${super.info()}\nAble to play games!`;
    }
    gaming() {
        return `${this.run()}\nRunning PUBG and Valorant!`;
    }
}

let myLaptop = new LaptopGaming("Mac", "M3 Pro", "123");
console.log(myLaptop.info());
console.log(myLaptop.gaming());
console.log("Decrypted password:", myLaptop.getPassword());
myLaptop.updatePassword("newPassword256");
console.log("Decrypted new password:", myLaptop.getPassword());