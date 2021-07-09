// async/await tutorial
    async function harry(){
        console.log('Inside harry function');
        const response = await fetch('https://api.github.com/users');
        console.log('before response');
        const users = await response.json();
        console.log('users resolved')
        return users;
    
        // return "harry";
    }
    
    console.log("Before calling harry")
    let a = harry();
    console.log("After calling harry")
    console.log(a);
    a.then(data => console.log(data))
    // console.log("Last line of this js file")

// promise tutorial part a)
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})

// promise tutorial part b)

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 50);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()

// fetch API tutorial


// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData()