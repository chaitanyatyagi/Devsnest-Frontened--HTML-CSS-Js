let input = document.querySelector('input');
let add = document.querySelector('button');
let newx = document.querySelector('.newx');
add.addEventListener('click', () => {
    if (input.value != "") {
        const subnew = document.createElement('div');
        subnew.innerHTML = input.value;

        // new div added to store list elements
        newx.appendChild(subnew);
        subnew.classList.add('new');

        // new button added in subnew div
        let butn = document.createElement('button');
        subnew.appendChild(butn);
        butn.classList.add('btn');
        butn.innerHTML = 'x';

        // program to delete entire entry
        let butx = document.querySelectorAll('.btn');
        for (let i = 0; i < butx.length; i++) {
            butx[i].addEventListener('click', () => {
                butx[i].parentElement.remove();
            });
        }
    }
    else {
        alert("ENTER SOMETHING")
    }
    input.value = "";
    });