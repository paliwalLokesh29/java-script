// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     },3000
// );
// }

// getData(); //it is a process or async funtion always return a promise.

// //await - ?
// it is used in asyn data because when we fetch data using api so it required time os used await 
//fetech API

async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
}
getData();
//scenario
//prepare url / api endpoint ->sync
//fetch data ->network call -> async it used await because data take time to fetech data in the api
 //process data -> sync

