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
 function decorator(className:any,methodName:any,functionDecor:any) {
    // console.log("aaaa",a);
    // console.log("bbbb",methodName);
    //  console.log("cccc",c);

    functionDecor.value=function(a:number,b:number){
        return a*b;
    }
    
 }
 class Hao {
    //thuộc tính
    //phương thức
    @decorator
    add(a:number,b:number){
        return a+b;
    }
 }
 // từ lớp phải tạo ra đối tượng
 let hao1=new Hao();
 console.log(hao1.add(1,2));

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
    let k="hoa hồng";
    return function (target:any,propertKey:any,descriptor:PropertyDescriptor) {
       descriptor.value=function () {
            return k;
        };
    }
 }
 function second() {
    // console.log("second được chạy");
     return function (target:any,propertKey:any,descriptor:any) {
      descriptor.value=function () {
            return "lê văn c"
        };
    }
 }
 function three() {
    // console.log("three được chạy");
    
     return function (target:any,propertKey:any,descriptor:any) {
        //  chạy đầu tiên
        descriptor.value=function () {
            return "lê văn b"
        };
        console.log("333333");
    }
 }
 class ExampleDecor {
    readonly fullName:string
    constructor(name:string){
        this.fullName=name;
    }
    @second()
    @three()
    method(){
        console.log("method được gọi!",this.fullName);
        return this.fullName
    }
 }
 let std1= new ExampleDecor("lê văn A22");



 







 
 