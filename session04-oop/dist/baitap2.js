"use strict";
/*
    khởi tạo đối tượng student
*/
class Student {
    constructor(studentCode, name, age, address, phone) {
        this.studentCode = studentCode;
        this.studentName = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phone;
    }
}
// Khai báo mảng chứa danh sách học sinh
let students = [];
// function thêm sinh viên
function addStudent() {
    let studentCode = Number(prompt("mời nhập mã code"));
    let studentName = prompt("mời nhập tên sinh viên");
    let studentAge = Number(prompt("mời nhập tuổi sinh viên"));
    let studentAddress = prompt("mời nhập địa chỉ sinh viên");
    let studentPhone = prompt("mời nhập số điện thoại");
    // khởi tạo đối tượng mới
    let std = new Student(studentCode, studentName, studentAge, studentAddress, studentPhone);
    students.push(std);
}
// function để in ra danh sách sinh viên
function showStudent() {
    console.log("dánh sách sinh viên");
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}
// function sửa sinh viên theo mã sinh viên 
function updateStudent() {
}
// function xoá sinh viên theo mã sinh viên
function deleteStudent(studentCode) {
    // kiểm tra xem trong danh sách có mã này không
    let findIndex = students.findIndex((item) => item.studentCode == studentCode);
    if (findIndex == -1) {
        console.log("không tồn tại sinh viên");
        return;
    }
    students.splice(findIndex, 1);
    console.log(`đã xoá sinh viên có mã ${studentCode}`);
}
// function thoát chương trình
let flag = true;
do {
    let option = prompt("mời lựa chọn các C/R/U/D/E");
    switch (option) {
        case "c":
            // gọi hàm để thêm sinh viên
            addStudent();
            break;
        case "r":
            // gọi hàm để in ra sinh viên
            showStudent();
            break;
        case "u":
            // gọi hàm để sửa sinh viên
            break;
        case "d":
            // gọi hàm để xoá sinh viên
            let studentCode = Number(prompt("mời nhập mã sinh viên"));
            deleteStudent(studentCode);
            break;
        case "e":
            // gọi hàm để thoát chương trình
            flag = false;
            break;
        default:
            console.log("mời nhập lại để chạy chương trình");
    }
} while (flag);
