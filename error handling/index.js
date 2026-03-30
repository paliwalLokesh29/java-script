//error handling using try and catch block

// try{
//     console.log("at that time no error");
//     console.log(x);
//     console.log("code is finish without error");
// }
// catch(err){
//     console.log("error is detched");
//     console.log("type of error is --- ", err);
// }finally{
//     console.log("this is run everytime");
// }


// using throw gave own error 

try{
    console.log("at that time no error");
    console.log(x);
    console.log("code is finish without error");
}
catch(err){
    
    throw new Error("bhi phala x ki value declare kar");
}
