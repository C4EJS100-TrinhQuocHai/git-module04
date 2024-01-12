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
    sayHello() {
    }
    pay() {
    }
}
let chirld = new Chirld(11, "hoa", "hn");
console.log("1111111", chirld);
/*
   viết 1 phương thức abstract bên class cha
   sau đó triển khai 2 phương thức ở trên 2 class con circle,và square
*/
