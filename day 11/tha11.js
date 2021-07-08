let my_list =
    [{
        QUESTION: "Which country is brie cheese originally from?",
        OPTION1: "France",
        OPTION2: "India",
        OPTION3: "HongKon",
        OPTION4: "Germany",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "What is the birth year of Maharana Pratap Singh",
        OPTION1: "1940",
        OPTION2: "1941",
        OPTION3: "1942",
        OPTION4: "1943",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "How many seasons does Friends TV Series has?",
        OPTION1: "10",
        OPTION2: "11",
        OPTION3: "12",
        OPTION4: "9",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "Name russian vaccine used in India?",
        OPTION1: "Covaxin",
        OPTION2: "Covishield",
        OPTION3: "Phyzer",
        OPTION4: "Sputnik",
        answer: document.querySelector('.ans4')
    },
    {
        QUESTION: "Which country won 2020 Euro league?",
        OPTION1: "France",
        OPTION2: "Italy",
        OPTION3: "Portugal",
        OPTION4: "Germany",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "Messi has won how many ballon'd'or titles?",
        OPTION1: "5",
        OPTION2: "7",
        OPTION3: "6",
        OPTION4: "4",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "What is the largest country in the world?",
        OPTION1: "Chicago",
        OPTION2: "China",
        OPTION3: "Russia",
        OPTION4: "New York",
        answer: document.querySelector('.ans3')
    },
    {
        QUESTION: "Which planet is closest to the sun?",
        OPTION1: "Mercury",
        OPTION2: "Venus",
        OPTION3: "Earth",
        OPTION4: "Mars",
        answer: document.querySelector('.ans1')
    },
    {
        QUESTION: "Who came second in the FIFA Women's World Cup in 2019?",
        OPTION1: "USA",
        OPTION2: "Netherlands",
        OPTION3: "Sweden",
        OPTION4: "England",
        answer: document.querySelector('.ans2')
    },
    {
        QUESTION: "In what franchise would you find the character Katniss Everdeen?",
        OPTION1: "Dragon Ball Z",
        OPTION2: "Naruto",
        OPTION3: "Death Note",
        OPTION4: "Hunger Games",
        answer: document.querySelector('.ans4')
    },
    ]

let btn = document.querySelectorAll('#select');
let correct = 0;
let wrong = 0;
let x = 0;
for (let j = 0; j < 4; j++) {
    btn[j].addEventListener('click', (stop) => {
        if (btn[j].innerHTML == my_list[x].answer.innerHTML) {
            my_list[x].answer.innerHTML = 'CORRECT ANSWER';
            my_list[x].answer.style.color = 'green';
            correct += 1;
        }
        else {
            btn[j].innerHTML = 'WRONG ANSWER';
            btn[j].style.color = 'red';
            wrong -= 1;
        }
    });
}

let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let question = document.querySelector('.question');
let ans1 = document.querySelector('.ans1');
let ans2 = document.querySelector('.ans2');
let ans3 = document.querySelector('.ans3');
let ans4 = document.querySelector('.ans4');

next.addEventListener('click',()=>{
    if(x<10){
        x += 1;
    ans1.style.color = 'white';
    ans2.style.color = 'white';
    ans3.style.color = 'white';
    ans4.style.color = 'white';
    question.innerHTML = my_list[x].QUESTION;
    ans1.innerHTML = my_list[x].OPTION1;
    ans2.innerHTML = my_list[x].OPTION2;
    ans3.innerHTML = my_list[x].OPTION3;
    ans4.innerHTML = my_list[x].OPTION4;
    }
    else if(x==10 || x==9){
        question.innerHTML = `TOTAL SCORE ${correct + wrong} out of 10`;
        ans1.innerHTML = `Total Correct points = ${correct} `;
        ans2.innerHTML = `Total Wrong points = ${wrong} `;
        ans3.style.backgroundColor = "white";
        ans3.style.backgroundColor = "2px solid white";
        ans4.style.backgroundColor = "white";
        ans4.style.backgroundColor = "2px solid white";
    }
});

previous.addEventListener('click',()=>{
    if(x>0){
        x -= 1;
    question.innerHTML = my_list[x].QUESTION;
    ans1.innerHTML = my_list[x].OPTION1;
    ans2.innerHTML = my_list[x].OPTION2;
    ans3.innerHTML = my_list[x].OPTION3;
    ans4.innerHTML = my_list[x].OPTION4;
    ans3.style.backgroundColor = "black";
    ans4.style.backgroundColor = "black";
    ans3.style.color = "white";
    ans1.style.color = "white";
    ans2.style.color = "white";
    ans4.style.color = "white";
    }
    else if(x == 0){
        window.location = "http://127.0.0.1:5500/day%2011/tha11homepg.html";
    }
});
