let remain = 36;
let book = 0;
let remaining = document.querySelector('.remaining');
let booked = document.querySelector('.booked');
let seat = document.querySelectorAll('.seat');
for(let i = 0; i<36;i++){
    seat[i].addEventListener('click',()=>{
        console.log(seat[i]);
        if(seat[i].classList.contains('seatclick')){
            seat[i].classList.remove('seatclick');
            remain -= 1;
            book += 1;
            remaining.innerHTML = `SEATS REMAINING ${remain}`;
            booked.innerHTML = `SEATS BOOKED ${book}`;
        }
        else{
            seat[i].classList.add('seatclick')
            book -= 1;
            remain += 1;
            remaining.innerHTML = `SEATS REMAINING ${remain}`;
            booked.innerHTML = `SEATS BOOKED ${book}`;
        }
    });
};

