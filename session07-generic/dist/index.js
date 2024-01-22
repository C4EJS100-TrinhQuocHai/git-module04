"use strict";
console.log("!11111");
/*
    generic: chung chung (không cụ thể);

    // viết 1 function chấp nhận mọi tham số truyền vào và trả về 1 kết quả bất kì

 */
//  function sayHello(param:any) :any{
//     return param;
//  }
/* viết theo kiểu generic */
function sayHello(params) {
    return params;
}
;
const say1 = sayHello("xin chào");
const say2 = sayHello(1);
const say3 = sayHello(true);
console.log("11111", say1);
console.log("22222", say2);
console.log("33333", say3);
function typeParam(first, second) {
    return [first, second];
}
const typeParam1 = typeParam({ name: "hoa" }, 1);
const typeParam2 = typeParam("hào", "su");
console.log("11111", typeParam1);
console.log("22222", typeParam2);
/*
    clone object
    shalow clone : clone nông (chưa hết)
    1.toán tử spread
    2.object.assign

    deep clone :clone hết (clone sâu)
    1.JSON.parse(JSON.stringify(obj));
 */
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
let merge1 = merge({ name: "hoa" }, { age: 25, name: "hồng" });
console.log("merger1", merge1);
function sayHello11(params) {
    return params;
}
;
function checkLength(params) {
    let description = "";
    if (params.length === 1) {
        description += "có 1 mô tả";
    }
    else if (params.length === 5) {
        description += "có hơn 5 mô tả";
    }
    else {
        description += "có  nhiều mô tả";
    }
    return [params, description];
}
let checkLength1 = checkLength(["hồng", "minh"]);
console.log("checkLength1", checkLength1);
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.prototype.myCase="name";
// console.log("333333",fruits);
function getValue(obj, key) {
    return "value" + obj[key];
}
let getValue1 = getValue({ name: "hoa", age: 25 }, "age");
console.log("1111111", getValue1);
// generic class trong typescript
class GetData {
    constructor() {
        this.data = [];
    }
    // thêm
    set addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        let removeIndex = this.data.indexOf(item);
        if (removeIndex == -1) {
            return;
        }
        this.data.splice(removeIndex, 1);
    }
    // lấy về
    get getItems() {
        console.log(this.data);
        return this.data;
    }
}
// khởi tạo đối tượng từ class GetData
let getData1 = new GetData();
getData1.addItem = "minh";
console.log("2222222", getData1.getItems);
//lấy ra
/*
 dùng generic để tạo 1 function như hàm map có tên myMap

 */
function myMap(arr, callBack) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callBack(arr[i]));
    }
    return newArr;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(myMap(arr1, function (item) {
    return item * 2;
}));
/* filter */
function myFilter(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let check = callback(arr[i]);
        if (check) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let numbers = [1, 2, 3, 4, 6];
console.log(myFilter(numbers, (item) => item >= 3));
const wrappedValue = { value: 10 };
const wrappedValue2 = { value: "5" };
