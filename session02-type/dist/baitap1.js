"use strict";
let users1 = [
    {
        first_name_hong: "Nguyen",
        last_name: "Hoang",
        age: 18,
        gender: 0,
    },
    {
        first_name_hong: "Minh",
        last_name: "Hieu",
        age: 24,
        gender: 1,
    },
    {
        first_name_hong: "Duong",
        last_name: "Linh",
        age: 53,
        gender: 1,
    },
    {
        first_name_hong: "Minh",
        last_name: "Thao",
        age: 21,
        gender: 0,
    },
    {
        first_name_hong: "Hao",
        last_name: "An",
        age: 51,
        gender: 0,
    },
    {
        first_name_hong: "Tat",
        last_name: "Thanh",
        age: 17,
        gender: 0,
    },
];
// Viết một hàm trả về toàn bộ tên đầy đủ của các user (first_name + last_name) trong mảng users, yêu cầu phải sử dụng hàm Array.prototype.reduce
function nameUser(user) {
    const result = user.reduce((acc, item) => {
        acc.push(item.first_name + item.last_name);
        return acc;
    }, []);
    return result;
}
// console.log(userFilter(users1));
function nameUsers(user) {
    const newArr = user.reduce((arr, item) => {
        if (item.age > 40 && item.gender == 0) {
            arr.push(item);
        }
        return arr;
    }, []);
    return newArr;
}
console.log(nameUsers(users1));
function camelCase(a) {
    const result = a.reduce((acc, item) => {
        for (const key in item) {
            let newKey = key.split("_");
            //newKey= [first,name,hong]
            if (newKey.length > 1) {
                for (let i = 1; i < newKey.length; i++) {
                    newKey[i] = newKey[i][0].toUpperCase() + newKey[i].slice(1);
                }
                //[ first,Name,Hong]
                const aaa = newKey.join(""); //firstNameHong
                item[aaa] = item[key];
                /*
                  {
                       first_name_hong: "Tat",
                      last_name: "Thanh",
                      age: 17,
                      gender: 0,
                      firstNameHong:"Tat"
                  }
                 */
                delete item[key];
            }
        }
        acc.push(item);
        return acc;
    }, []);
    return result;
}
// console.log(camelCase(users1));
// let text="hoang";
// let ketQua= text[0].toUpperCase()+text.slice(2);
// console.log(ketQua);
// let obj={
//     name:"hoa"
// }
// obj["age"]=20;
// console.log(obj);
let obj1 = [
    {
        name: "Thuong"
    },
    {
        name: "An"
    },
    {
        name: "Khanh"
    },
    {
        name: "Hao"
    },
    {
        name: "My"
    },
    {
        name: "Cook"
    }
]
function sapxep() {
    let a = obj1.sort((a, b) => {
        if (a.name > b.name) {
            return 5
        } else if (a.name < b.name) {
            return -8
        } else {
            return 0
        }
    })
    console.log("1111", a)
}
sapxep()
let count=0;
const firstTime = performance.now();




for (let i = 0; i < 55; i++) {
    for (let j = 0; j < 55 ;j++) {
      count++
        
    }
    
}
const secondTime = performance.now();
console.log(`The something function took ${secondTime - firstTime}
                 milliseconds.`);
