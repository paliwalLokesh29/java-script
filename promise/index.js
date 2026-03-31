// let firstpromise = new promise((resolve, reject)=>{
// console.log("Love");
// //if we not mark anything output pending and ,mark resole so resolve the promise.
// resolve(1001);
// // reject(new Error("Internet problem"));
// });

//Asyncronous code
// function sayName(){
//     console.log("My name is Lokesh paliwal");
// }

// setTimeout(sayName, 1000);

// let promise1 = new ppromise((resolve, reject)=>{
//  let sucess = true;
//  if(sucess){
//     resolve("promise Fulfilled");
//  }else{
//     reject("promise Rejected");
//  }
// });
promise1.then((message)=> {
    console.log("first msg:" + message);
    return "promise fulfilled second message";
}).then((message)=> {
    console.log("second msg: "+ message);
});

let promise1 = new promise((resolve, reject ) => {
    setTimeout(resolve, 1000, "first");
})

let promise2 = new promise((resolve, reject ) => {
    setTimeout(resolve, 1000, "second");
})

let promise3 = new promise((resolve, reject ) => {
    setTimeout(resolve, 1000, "third");
})

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });