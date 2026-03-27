

// //function define
// function saymyname(){
//     console.log("love ");
// }
// //function call
// saymyname();

// function printnum(){
//     for(let i = 1; i<=100; i++){
//         console.log(i);
//     }
// }

// printnum();

// function printNum(num){
//     console.log(num);
// }

// printNum(5);
//here num is called parameter and 5 is called argument.

// function grtaver(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log(avg);
// }
// grtaver(10,20);

//return functions

// function getsum(a,b,c){
//   let sum = a+b+c;
//   return sum;
// let a  = 10
// }
// let ans = getsum(1,2,3);
// console.log(ans);

// Note after return statement any line of code is not working example return sum ka nicha likha hai let a = 10 is not working.

// function getmul(a,b){
//    return a*b;
// }
// console.log(getmul(2,3));
// 

// const getmul = function(a,b){
//    return a*b;
// }
// let ans = getmul(2,20);
// console.log(ans);

// arrow function
let getexp = (x,y)=> {
    let ans = x**y;
    return ans;
}
console.log(getexp(2,10));

