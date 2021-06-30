let input = document.querySelector('input');
let add = document.querySelector('button');
let newx = document.querySelector('.newx');

add.addEventListener('click',()=>{
    const subnew = document.createElement('div') ;
    subnew.innerHTML = input.value;
    subnew.innerHTML += "<button class='btn'>remove</button>";
    newx.appendChild(subnew);
    let btn = document.querySelector('.btn');
    subnew.classList.add('new')
    input.innerHTML = " ";
});
