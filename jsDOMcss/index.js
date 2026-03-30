let paraElement = document.getElementById('fpara');
console.log(paraElement.style); //is used for find css property using js.

//for change css property using js 
paraElement.style.color = 'white';
paraElement.style.backgroundcolor = 'white';

// using cssText property is used for change multiple property at a time.

let secondElement = document.getElementById('sdiv');
secondElement.cssText;
// for get css property
secondElement.style.cssText;

//for set css property
secondElement.style.cssText = "background-color: black; color:white; padding= 0.5rem";

//setAttribute using it remove all old value and insert new value.
let firstelement = document.querySelector('#fdiv');
firstelement.setAttribute('class','divClass');

//using .className
let fpara = $0;

fpara.className //get class
//set class
fpara.className = "xyz , abc" //class name is set 

//using .classList is used for get, add, remove, toggle, contains

let fpara = document.querySelector('#fpara');
//get
fpara.classList
//set
fpara.classList.add('thirdClass');

//remove
fpara.classList.remove("firstClass");

//toggle means is class is present so remove the class else add the class.

fpara.classList.toggle("secondClass");


//contains is used to find class present or not
fpara.classList.contains("firstClass");

