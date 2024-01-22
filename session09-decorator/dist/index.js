"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("1111122");
/*
    decorator : trang trí lại ( từ bản gốc mình có thể tuỳ chỉnh ra một bản khác theo ý của
        mình)
    -decorator sẽ gồm có
    1.class decorator ( tên class)
    2.property decorator  (thuộc tính)
    3.method decorator    (các phương thức)
    4.accessor  decorator ( các truy cập get,set)
    5.parammeter  decorator (các tham số trong hàm)
    -Sự khác nhau giữa hàm (function) và method
     + hàm khai báo,thực hiện chức năng khi gọi thì gọi theo tên hàm
     + method cũng thực hiện chức năng nhưng khi gọi phải trỏ  đến đối tượng gọi phương thức
    callback :
    1.là hàm
    2.hàm được truyền làm tham số của hàm khác
    đệ quy: hàm tự gọi lại chính nó
    -function return về 1 function đây là khám niệm closure
     + hàm con có thể sử dụng các thuộc tính của hàm cha
     + function cha trả về 1 function con
*/
// decorator
// khai báo 1 cái hàm khác nó sẽ đi decor lại cái hàm trong class Hao
function decorator(className, methodName, functionDecor) {
    // console.log("aaaa",a);
    // console.log("bbbb",methodName);
    //  console.log("cccc",c);
    functionDecor.value = function (a, b) {
        return a * b;
    };
}
class Hao {
    //thuộc tính
    //phương thức
    add(a, b) {
        return a + b;
    }
}
__decorate([
    decorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Hao.prototype, "add", null);
// từ lớp phải tạo ra đối tượng
let hao1 = new Hao();
console.log(hao1.add(1, 2));
//  class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   @enumerable12
//   greet() :any{
//     return "Hello, " + this.greeting;
//   }
// }
// function enumerable12(target: any, propertyKey: string, descriptor: PropertyDescriptor) :any{
//     console.log("222222",descriptor);
//     return 5
// }
// nạp chồng phương thức
function first() {
    // console.log("first được chạy");
    let k = "hoa hồng";
    return function (target, propertKey, descriptor) {
        descriptor.value = function () {
            return k;
        };
    };
}
function second() {
    // console.log("second được chạy");
    return function (target, propertKey, descriptor) {
        descriptor.value = function () {
            return "lê văn c";
        };
    };
}
function three() {
    // console.log("three được chạy");
    return function (target, propertKey, descriptor) {
        //  chạy đầu tiên
        descriptor.value = function () {
            return "lê văn b";
        };
        console.log("333333");
    };
}
class ExampleDecor {
    constructor(name) {
        this.fullName = name;
    }
    method() {
        console.log("method được gọi!", this.fullName);
        return this.fullName;
    }
}
__decorate([
    second(),
    three(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleDecor.prototype, "method", null);
let std1 = new ExampleDecor("lê văn A22");
