var input = document.querySelector('input');
var show =document.querySelector('button')
const container1 = document.querySelector(".containerOne")
const container2 = document.querySelector(".containerTwo")

show.addEventListener('click',async function(){
    container1.classList.add('hidden')
    container2.classList.remove('hidden')
    console.log(input.value)
    let res = getData(input.value)
    let user = await res
    let status = user.status
    console.log(status)
    if(status == "FAILED"){
        const handle = document.createElement('h1');
        handle.innerHTML = 'UserName Invalid'
        container2.appendChild(handle)
    }else{
        ShowData(user);
    }
        
})

async function getData(username){
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`)
    const data = await res.json()
    return data;
}

function ShowData(user){
    const handle = document.createElement('h1');
    const photo = document.createElement('img');
    const rank = document.createElement('h3');
    const rating = document.createElement('h3');
    const country = document.createElement('h3');

    handle.innerHTML = user.result[0].handle;
    container2.appendChild(handle);
    photo.src = user.result[0].titlePhoto;
    container2.appendChild(photo);
    photo.style.width = "200px"
    rank.innerHTML = "Rank: " + user.result[0].rank;
    container2.appendChild(rank);
    rating.innerHTML = "Rating: " + user.result[0].rating;
    container2.appendChild(rating);
    if(user.result[0].city){
        country.innerHTML = "City: " + user.result[0].country;
        container2.appendChild(country)
    }
    
}