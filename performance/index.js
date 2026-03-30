

 //required 100 time reflow and repaint so more time
//code1 
const t1 = performance.now();
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para "+ i;
    document.body.appendChild(para);
}

//required less time only required 1 reflow and 1 repaint
const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();
console.log(t4 - t3);

//best code used documnet fragment required onli 1 reflow and 1 repaints

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para "+ i;
    //No reflow and repaint for thr below line
    fragment.appendChild(para);
}
//the below line reruired 1 reflow and 1 repaint 
document.body.appendChild(fragment);