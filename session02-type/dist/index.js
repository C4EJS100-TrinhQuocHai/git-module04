"use strict";
let number12 = 5;
let string1 = "hoa";
let isBoolean = true;
let isUndefined = undefined;
let isNull = null;
/*
    Mảng sẽ có 2 cách khai báo
    kIÊU DỮ LIỆU : UNION
    Function: khi yêu cầu kiểu dữ liệu trả về phải có return trả về đúng kiểu dữ liệu đó
    Kiểu dữ liệu enum
 */
let students = ["hoa", "hồng"];
students.push(5);
let students2 = ["minh", "đạt"];
console.log("number111", number12);
const sayHello = () => {
    return "hoa";
};
/*
    Viết chương trình nhận vào 2 số tính tổng 2 số đố
    Nếu là số hết thì trả về số
    Nếu có string trả về string
    Boolean != boolean
    String != string
    Number != number
 */
const tinhTong = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
console.log(tinhTong("5", 6));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["CUSTOMER"] = 2] = "CUSTOMER";
})(Role || (Role = {}));
;
let person = {
    name: "hoa",
    age: 25,
    role: 1
};
let users = [];
let user1 = {
    name: null,
    age: 20
};
users.push(user1);
console.log(users);
// kiểu dữ liệu assertion  
// dự đoán kiểu liệu trả về nếu không phải kiểu dữ liệu đÓ thì lấy theo kết quả truyền vào
let assertion = 5;
let test = assertion;
console.log(typeof test);
