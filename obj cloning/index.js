// // <!-- obj is dynamic in nature  -->

// let obj = {
//  age: 12,
//  ht: 180,
//  wt: 68,
// };
// console.log(obj);
// obj.color = "white";
// console.log(obj);

// object cloning using spread operator {...} 

// let src = {
//     age: 12,
//  ht: 180,
//  wt: 68,
// };

// let des = {...src};

// console.log(src);
// console.log(des);

// object cloning using assign method

// let src = {
//     age: 12,
//  ht: 180,
//  wt: 68,
// };

// let des = Object.assign({},src);

// console.log(src);
// console.log(des);

// object cloning using iteration

let src = {
    age: 12,
 ht: 180,
 wt: 68,
};

let des = {};

for(let key in src) {
    let newkey = key;
    let newvalue = src[key];
    //insert newkey and value in dest and create a clone
    des[newkey] = newvalue;
}

console.log(src);
console.log(des);
