const cards = document.querySelectorAll('.memory-card');
let hasflippedcard = false;
let firstcard;
let secondcard;
let lockboard = false;

function flipcard(){
    if(lockboard){return;}
    if(this === firstcard){return;}
    this.classList.add('flip');
    if(!hasflippedcard){
        hasflippedcard = true;
        firstcard = this;
        return;
    }
    else{
        hasflippedcard = false;
        secondcard = this;
    }
    if(firstcard.dataset.framework === secondcard.dataset.framework){
        firstcard.removeEventListener('click',flipcard);
        secondcard.removeEventListener('click',flipcard);
        resetboard();
    }
    else{
        lockboard = true;
        setTimeout(() => {
            firstcard.classList.remove('flip');
            secondcard.classList.remove('flip');
            resetboard();
        }, 1500);
    }
}
function resetboard(){
    [hasflippedcard,lockboard] = [false,false];
    [firstcard,secondcard] = [null,null];
}
(function shuffle(){
    cards.forEach(card => {
        let randompos = Math.floor(Math.random()*12);
        card.style.order = randompos;
    });
})();

cards.forEach(card => card.addEventListener('click',flipcard));