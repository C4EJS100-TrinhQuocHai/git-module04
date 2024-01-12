"use strict";
/*
    ABSTRACT CLASS
*/
class Person {
    constructor(name1, address) {
        this.userName = name1;
        this.address = address;
    }
}
class Chirld extends Person {
    constructor(id, name, address11) {
        super(name, address11);
        this.userId = id;
    }
    // bên thằng con phải implement (triển khai các phương thức bên thằng cha);
    sayHello() { }
    pay() { }
}
let chirld = new Chirld(11, "hoa", "hn");
console.log("1111111", chirld);
/*
    viết 1 phương thức abstract bên class cha
    sau đó triển khai 2 phương thức ở trên 2 class con circle,và square
 */
class BankAccount {
    getBalance(id) { }
}
let arrAccount = [];
class SavingsAccount extends BankAccount {
    constructor(id, money) {
        super();
        this.id = id;
        this.money = money;
    }
    saveAccount() {
        let newAccount = {
            id: this.id,
            money: this.money
        };
        arrAccount.push(newAccount);
        console.log("11111", arrAccount);
    }
    getBalance() {
        return this.money;
    }
}
let acc = new SavingsAccount(11, 3000);
console.log(acc.id);
class CheckingAccount extends BankAccount {
    getBalance(id) {
        let findAcc = arrAccount.find(item => item.id === id);
        if (!findAcc) {
            return "khong tim thay";
        }
        return findAcc.money;
    }
}
let check = new CheckingAccount();
console.log(check.getBalance(11));
// tạo 1 class đi implement interface Thao
class Minh1 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("22222222", this.name);
    }
    showName() {
    }
}
let std3 = new Minh1("minh1111");
// console.log(std3.sayHello());
class Hieu {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log("111111111", this.name);
    }
    showName2() {
        console.log("111111111", this.name);
    }
}
let std = new Hieu(1, "hieu", 18);
console.log(std.showName());
