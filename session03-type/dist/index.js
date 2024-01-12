"use strict";
console.log("1111");
/*
         Frequency counter pattern
         
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];
function same(array1, arry2) {
    if (array1.length != arry2.length)
        return false;
}
same(arr1, arr2);
let array3 = [1, 2, 5, 2, 8, 1, 5, 11];
let num = 3;
function maxSumArray(array, number) {
    //
    let maxSum = 0;
    let sumNum = 0;
    //đi tạo ra các cặp
    for (let i = 0; i < number; i++) {
        sumNum += array[i]; //1+2+5
    }
    maxSum = sumNum;
    for (let i = number; i < array.length; i++) {
        sumNum = sumNum - array[i - number] + array[i];
        if (maxSum < sumNum) {
            maxSum = sumNum; //9
        }
    }
    return maxSum;
}
console.log(maxSumArray(array3, num));
