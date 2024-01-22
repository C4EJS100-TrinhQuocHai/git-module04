"use strict";
console.log("!1111111");
class Hao2 {
    constructor(suhao) {
        this.suhao = suhao;
    }
    set sayHello(value) {
        this['suhao'] = value;
        console.log("111111", this.suhao);
    }
}
let minh = new Hao2("hello");
minh.sayHello = "hlllllle";
/*
Bài tập
 */
