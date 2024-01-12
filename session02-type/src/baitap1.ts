type User1={
    first_name:string,
    last_name:string,
    age:number,
    gender:number
}
let users1:User1[] = [
  {
    first_name: "Nguyen",
    last_name: "Hoang",
    age: 18,
    gender: 0,
  },
  {
    first_name: "Minh",
    last_name: "Hieu",
    age: 24,
    gender: 1,
  },
  {
    first_name: "Duong",
    last_name: "Linh",
    age: 53,
    gender: 1,
  },
  {
    first_name: "Minh",
    last_name: "Thao",
    age: 21,
    gender: 0,
  },
  {
    first_name: "Hao",
    last_name: "My",
    age: 51,
    gender: 0,
  },
  {
    first_name: "Tat",
    last_name: "Thanh",
    age: 17,
    gender: 0,
  },
];
// Viết một hàm trả về toàn bộ tên đầy đủ của các user (first_name + last_name) trong mảng users, yêu cầu phải sử dụng hàm Array.prototype.reduce
function nameUser(user:User1[]):string[] {
    const result = user.reduce((acc:string[],item:User1):string[]=>{
         acc.push(item.first_name+ item.last_name)
         return acc
    },[])
    return result
}
// console.log(userFilter(users1));
function nameUsers(user:User1[]):User1[] {
   const newArr=user.reduce((arr:User1[],item:User1):User1[]=>{
    if(item.age>40 && item.gender==0){
        arr.push(item)
       
    }
    return arr
   },[])

    return newArr
}
console.log(nameUsers(users1));

function camelCase(a:User1[]) :User1[]{
    const result=a.reduce((acc:User1[],item:any)=>{
        for (const key in item) {
            console.log(key);
            
         let newKey=key.split("_")
         if (newKey.length>1) {
            for (let i = 1; i < newKey.length; i++) {
           newKey[i]=newKey[i].charAt(0).toUpperCase()+newKey.splice(1)
         }
         const aaa=newKey.join("")
         item[aaa]=item[key]
         delete item[key]
         }
        }
        acc.push(item)
        return acc
    },[])
    return result
}
console.log(camelCase(users1));
