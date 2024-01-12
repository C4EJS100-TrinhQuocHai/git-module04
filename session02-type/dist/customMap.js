/* 
    map: trả về 1 mảng độ dài bằng độ dài ban đầu 
    dùng cho mảng
 */
// let numbers=[1,2,5,6];
// let text="xu hào";

// let result= numbers.map((item,index,array)=>{
//     return item>2;
// })
// console.log(result);

// tạo function custom lại map
function customMap(array,callback) {
    // array là mảng truyền vào.
    // call back là 
    if(!Array.isArray(array)){
        throw new Error('customMap is not function');
    }
    let result=[];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i],i,array));
    }
    return result;
}
let numbers=[1,2,5,6];
console.log(customMap(numbers,function callback(item) {
        return item*2
}));
// custom filter  
Array.prototype.loc=customMap;
console.log(numbers);
// let check= numbers.hello()
// xây hàm foreach
/* 
    không tạo ra mảng mới,tương tác trực tiếp với mảng ban đầu
    không nhận return
 */
let numbers1 = [1, 2, 5, 6];
//  let result1= numbers1.forEach((item,index,array)=>{
//         numbers1[index]=item*2
//  })
//  console.log(numbers1);

 //function custom forEach

 function customForeach(array,callback) {
    if(!Array.isArray(array)){
        throw new Error(`${array}.forEach is not a function`);
    }
    for (let i = 0; i < array.length; i++) {
        array[i]= callback(array[i])
        
    }
    
 }
 customForeach(numbers1,(item)=>item*2);
 console.log(11111111,numbers1);
 function aaa(params) {
    return 
 }
 console.log(aaa());

 // hàm reduce
  
let number2 = [1,2,5,6]

const tong = number2.reduce((accumulated, item) => {
    return accumulated + item
},0)
console.log(tong);




