


// let name = "Lokesh"
function outerfunction(){
    let name = "Lovee"; //let->block scoped
    function innerfunction(){
        //    let name = "love";
        console.log(name);
    }

    innerfunction();
}
outerfunction();

//when all function are complete so name variable memmory is free

function outerfunction(){
    let name = "Lovee"; 
    function innerfunction(){
        console.log(name);
    }

    innerfunction();
}
outerfunction();

// Closure = function + uske surrounding variables (memory)
// ➡️ Matlab function apne bahar ke variables ko yaad rakhta hai

// Even agar outerfunction khatam ho jaye, tab bhi inner function us variable ko yaad rakh sakta hai