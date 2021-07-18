
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6){
    counter = 1;
    }
}, 5000);

let slide = document.querySelectorAll('.slide')
for(let i =0;i<6;i++){
    slide[i].addEventListener('click', () => {
        location.href = `/blogtype/indx${i+1}.html`
    })
}
let hide = document.querySelectorAll('.hide')
for(let x =0;x<6;x++){
    slide[x].addEventListener('mouseover', () => {
        hide[x].style.display = "block";
    })
}
for(let x =0;x<6;x++){
    slide[x].addEventListener('mouseout', () => {
        hide[x].style.display = "none";
    })
}
