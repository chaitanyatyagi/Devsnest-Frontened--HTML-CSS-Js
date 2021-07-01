let input = document.querySelector('input');
let add = document.querySelector('button');
let newx = document.querySelector('.newx');
let x = 0;
add.addEventListener('click',()=>{
    const subnew = document.createElement('div') ;
    subnew.innerHTML = input.value;
    subnew.innerHTML += "<button class='btn'>remove</button>";
    newx.appendChild(subnew);
    subnew.classList.add('new')
    x += 1;
});

let butn = document.querySelectorAll('.btn');

for(let i = 0; i<x ; i++){
    butn[i].addEventListener('click',()=>{
        subnew.parentNode.removeChild('subnew');
        x -= 1;
    })
}
