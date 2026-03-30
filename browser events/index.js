// cheak all browser events
// mointerEvents(document);
// //close browser events
// unmointerEvents(document);
// function changeText(){
// let fpara = document.getElementById('fpara');
// fpara.textContent = "hello lokesh"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);

//change default behavior of anchor tag

// let anchorelement = document.getElementById('fanchor');


// anchorelement.addEventListener('click', function(event){
// event.preventDefault();
// anchorelement.textContent = "click done bhao"
// });

//Avoid too many listener
// let paras = document.querySelectorAll('p');

//  function alertpara(event) {
//       alert("you have click on para: "+ event.target.textContent );
//     }

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
   
// }


//most optimal solution

function alertpara(event) {
      alert("you have click on para: "+ event.target.textContent );
    }
    //target is used to gave iteration index at that time.

    let mydiv = document.getElementById('wrapper');

    document.addEventListener('click',alertpara);