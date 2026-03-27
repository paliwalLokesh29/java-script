// let obj = {
//     name : "Love",
//     age: 25,
//     wieght: 85,
//     height: "6feet",
//     greet: function(){
//        console.log("Hello je kaisa ho");
//     }
// };
// console.log(obj);
// obj.greet();

// let obj1 = obj; // it is a shallow copy of obj.
// console.log(obj1);

//creation of array

// let arr= [1,2,3,4,5];
// console.log(arr);

//using constructor
// let arr = new Array('love', 1, true);
// //in build function of array
// arr.push(45);
// arr.pop();
//  // console.log(arr.shift());
// // console.log(arr.unshift('hello'));
// // console.log(arr.slice(1,3));
// // console.log(arr.splice(1,2,'love'));

// console.log(arr);
// console.log(arr[0]);

// let arr = [10,20,30];
// let ansarray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansarray);

// let ans = [10, 20, 30, 41, 51, 20];

// let ansarr = ans.filter((number) =>{
//     if(number%2 == 0){
//         return number;
//     }
// })

// console.log(ansarr);

// let ans = [10,20,30,40];

// let ansarr = ans.reduce((acc, curr) =>{
//  return acc+curr;
// }
// ,0)
// console.log(ansarr);

// let arr = [2,1,7,4,9,0,4,3,6,5];
// let ans = arr.sort((a,b) => b-a); // descending order
// let ans = arr.sort() // ascending order
// console.log(ans);

// let arr = [10,20,30,2,1,20];
// console.log(arr.indexOf(30));

//for each
// let arr = [10,20,30,40];
// arr.forEach((value, index) => {
//     console.log("Number" ,value , "index", index);
// })

// for in
// let arr = [10,20,30,40,50];
// for(let key in arr){
//     console.log(key);
// }

// for of

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// array with function

let arr = [10,20,30,40,50];
 function totsum(arr) {
    let n = arr.length;
    let sum = 0;
    for(let i=0; i<n; i++){
      sum = sum+arr[i];
    }
    return sum;
}
let sum = totsum(arr);
console.log(sum);