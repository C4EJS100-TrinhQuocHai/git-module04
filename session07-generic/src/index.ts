console.log("!11111");
/* 
    generic: chung chung (không cụ thể);

    // viết 1 function chấp nhận mọi tham số truyền vào và trả về 1 kết quả bất kì

 */
//  function sayHello(param:any) :any{
//     return param;
//  }
 /* viết theo kiểu generic */
function sayHello<T>(params:T):T{
        return params
};
const say1= sayHello<string>("xin chào");
const say2= sayHello(1);
const say3= sayHello(true);
console.log("11111",say1);
console.log("22222",say2);
console.log("33333",say3);

function typeParam<T,U>(first:T,second:U): [T,U] {
    return [first,second]
}
const typeParam1= typeParam<object,number>({name:"hoa"},1);
const typeParam2= typeParam<string,string>("hào","su");
console.log("11111",typeParam1);
console.log("22222",typeParam2);
/* 
    clone object
    shalow clone : clone nông (chưa hết)
    1.toán tử spread
    2.object.assign

    deep clone :clone hết (clone sâu)
    1.JSON.parse(JSON.stringify(obj));
 */
function merge <T extends object,U extends object>(obj1:T,obj2:U) {
    return Object.assign(obj1,obj2)
}
let merge1= merge({name:"hoa"},{age:25,name:"hồng"});
console.log("merger1",merge1);

function sayHello11<T extends string>(params:T):T{
        return params
};
// yêu cầu phải trả về dạng string
// console.log(sayHello11(5));

// khi khai báo interface bắt buộc phải là 1 object
// trong interface chỉ chứa các thuộc tính(property) mà phương thức(method)
interface Lengthy {
    length:number,
}
 function checkLength <T extends Lengthy>(params:T):[T,string] {
    let description="";
    if(params.length===1){
        description+="có 1 mô tả"
    }else if(params.length===5){
        description+="có hơn 5 mô tả";
    }else{
        description+="có  nhiều mô tả";
    }
    return [params,description];
 }
 let checkLength1= checkLength(["hồng","minh"]);
 console.log("checkLength1",checkLength1);
//  let array1=["minh","hồng"];
//  console.log("444444",array1);
interface Array<T>{
    myCase():string
}

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.prototype.myCase="name";
 
// console.log("333333",fruits);

 function getValue <T extends object,U extends keyof T>(obj:T,key:U) {
    return "value" +obj[key];
 }
 let getValue1= getValue({name:"hoa",age:25},"age");

 console.log("1111111",getValue1);
// generic class trong typescript
 class GetData<T extends string|number|boolean> {
    private data:T[]=[];

    // thêm
   set addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        let removeIndex= this.data.indexOf(item);
        if(removeIndex==-1){
            return;
        }
        this.data.splice(removeIndex,1);
    }
    // lấy về
   get getItems(){
        console.log(this.data);
        return this.data
    }
 }
// khởi tạo đối tượng từ class GetData
let getData1= new GetData();
getData1.addItem="minh";
console.log("2222222",getData1.getItems);
//lấy ra
/* 
 dùng generic để tạo 1 function như hàm map có tên myMap

 */


function myMap<T,U>(arr:T[],callBack:(item:T)=>U):U[] {
    let newArr:U[] = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(callBack(arr[i]))
    }
    return newArr
}

let arr1 = [1,2,3,4,5]
console.log(myMap(arr1, function(item){
    return item * 2
}));


/* filter */

function myFilter <T> (arr:T[],callback:(item:T)=> boolean):T[]{
    const newArr:T[] =[];
    for (let i = 0; i < arr.length; i++) {
      let check = callback(arr[i])
      if (check) {
        newArr.push(arr[i])
      }       
    }
    return newArr;
}

let numbers =[1,2,3,4,6];
console.log(myFilter(numbers,(item) => item >= 3));
// generic đối với type
 type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
const wrappedValue2: Wrapped<string> = { value: "5" };

 
