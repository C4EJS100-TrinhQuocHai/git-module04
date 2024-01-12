let number12 :number =5;
let string1: string ="hoa";
let isBoolean : boolean =true;
let isUndefined: undefined=undefined;
let isNull : null =null;
/* 
    Mảng sẽ có 2 cách khai báo
    kIÊU DỮ LIỆU : UNION
    Function: khi yêu cầu kiểu dữ liệu trả về phải có return trả về đúng kiểu dữ liệu đó
    Kiểu dữ liệu enum 
 */
let students  :(string|number)[] =["hoa","hồng"];
students.push(5)
let students2 :Array<string> =["minh","đạt"];
console.log("number111",number12);

const sayHello =() :string=>{
    return "hoa"
}
/* 
    Viết chương trình nhận vào 2 số tính tổng 2 số đố 
    Nếu là số hết thì trả về số
    Nếu có string trả về string
    Boolean != boolean
    String != string
    Number != number
 */
const tinhTong =(a:number|string,b:number|string) :number|string=>{
    if(typeof a==="number"&& typeof b==="number"){
        return a+b
    }else{
        return String(a)+String(b)
    }
}

console.log(tinhTong("5",6));
enum Role {ADMIN,USER,CUSTOMER};

let person:{
    name:string,
    age:number,
    role:Role
}={
    name:"hoa",
    age:25,
    role:1
}

// Cách khai báo kiểu  alias
// dùng type ||inteface

type User={name:string|null,age:number};

let users : any[] =[];
let user1:User ={
    name:null,
    age:20
}

users.push(user1);
console.log(users);

// kiểu dữ liệu assertion  
// dự đoán kiểu liệu trả về nếu không phải kiểu dữ liệu đÓ thì lấy theo kết quả truyền vào


let assertion : any =5;

let test =<string>assertion;

console.log(typeof test);




