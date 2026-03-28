//normal function
// function finalName(finalname){
//  console.log(finalname);
// }

// finalName("lokesh");

//hosting because here function deleration at the end and function call is first and the output is correct.

// finalName("lokesh");
// function finalName(finalname){
//  console.log(finalname);
// }

// name("lokesh"); // its show error hosting not work in the function with expression
// var name = function finalName(finalname){
//  console.log(finalname);
// }

//noramal variable deleclarion
// var age = 25;
// console.log(age);

//variable hosting gave output undefined and its is only used with var keyword and any other keyword like let etc gave error.
// console.log(age);
// var age = 25;

// const object1 = new hello(); show error because class level hosting is not poosible
// class hello{

// }

// function greetme(greet, fullname){
//     console.log("hello", fullname);
//     greet();
// }
// function greet(){
//     console.log("hello je kaisa ho saara");
// }

// greetme(greet, "love");

const arr = [
    function add(a,b){
        return a+b;    },
            function add(a,b){
        return a-b;    },
            function add(a,b){
        return a*b;    },
];

let ans = arr[0];
let first = ans(5, 10);
console.log(first);