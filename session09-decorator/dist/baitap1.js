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
Object.defineProperty(exports, "__esModule", { value: true });
/*

 */
require("reflect-metadata");
/*
    tạo class có các thuộc tính
    name,price description,inStock,
 */
// triển khai reflect-metadata
function validate(target, propertyKey) {
    const propertType = Reflect.getMetadata("design:type", target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        set: function (value) {
            if (Number(value) < 0) {
                throw new Error("số truyền vào không được âm");
            }
            this[`${propertyKey}`] = value;
        },
        get: function () {
            return this[`${propertyKey}`];
        },
        value: true,
    });
}
class Product {
    constructor(name, price, des, stock) {
        this.name = name;
        this.price = price;
        this.description = des;
        this.inStock = stock;
    }
    set price1(price) {
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
}
__decorate([
    (validate),
    __metadata("design:type", Object)
], Product.prototype, "name", void 0);
__decorate([
    (validate),
    __metadata("design:type", Object)
], Product.prototype, "price", void 0);
__decorate([
    (validate),
    __metadata("design:type", Object)
], Product.prototype, "description", void 0);
__decorate([
    (validate),
    __metadata("design:type", Object)
], Product.prototype, "inStock", void 0);
let p1 = new Product("iphone", 500, "ôk", 5);
//  console.log("1111111",p1.getPrice);
