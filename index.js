// class human{

//     //properties 
//     age = 13; //public
//     #wt = 80; //private use # to make privete 
//     ht = 180;

//     //constructor

//     constructor(newage, newheight){
//         this.age = newage;
//         this.ht = newheight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am walking", this.#wt); //use this keyword to access the private properties
//     }
//     running(){
//         console.log("i am running");
//     }

//     //getter and setter 
//     get fetchweight() {
//         return this.#wt;   
//      }
//         set modifywt(val){
//             this.#wt = val;
//         }
// }
// // let obj = new human();
// // console.log(obj.age);

// let obj = new human(50, 190);
// console.log(obj.ht);
// // console.log(obj.fetchweight); fetch getter 

// // obj.walking();


//default parameter here at time of function call we not pass any value but here we set a defult value so at output default value is show.
// function sayname(myname = "prabhu deva"){
//     console.log(myname);
// }
// sayname();

// function sayName(fname = "love", lname = fname.toUpperCase()){
//     console.log(fname, " ", lname);
// }
// sayName("love");

//object is also create in defult parameter
// function solve(value = {age:15, wt:90, ht:90}){
//     console.log("hello jee", value);
// }
// solve();

//array is also is used in default parameter
// function solve(value = ["Love", "rahul", "lokesh"]){
//     console.log("hello jee", value);
// }
// solve();

// function solve(value = "rahul"){
//     console.log("hello jee", value);
// }
// solve(undefined); // here output is rahul not undrfined


