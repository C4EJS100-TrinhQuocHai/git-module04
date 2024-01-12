"use strict";
console.log("1111111");
/*
    Cách khởi tạo đối tượng.

*/
class Person {
    constructor(name, age, id, email) {
        // khởi tạo các thuộc tính của đối tượng
        this.userName = name;
        this.age = age;
        this.userId = id;
        this.email = email;
    }
    //  khởi tạo các phương thức (method)
    getName() {
        return this.userName;
    }
    setName(name) {
        this.userName = name;
    }
    set setUserName(name) {
        this.userName = name;
    }
    get getUserName() {
        return this.userName;
    }
}
let student1 = new Person("hoa", 25, 111, "hoa@gmail.com");
let student2 = new Person("hoa1", 20, 112, "hoa1@gmail.com");
// console.log(student1);
// console.log(student1.getName());
student2.setUserName = "hồng";
console.log("111111", student2.getUserName);
// tạo đối tượng employee (nhân viên kế thừa từ đối tượng person)
class Employee extends Person {
    constructor(job, salary, userName, age, userId, email) {
        super(userName, age, userId, email);
        this.job = job;
        this.salary = salary;
    }
}
let employee1 = new Employee("dev", 5000, "hoa", 20, 1, "hoa@gmail.com");
console.log("111111", employee1);
