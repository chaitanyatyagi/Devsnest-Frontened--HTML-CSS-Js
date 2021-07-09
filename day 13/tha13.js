let input = document.querySelector('input')
let btn = document.querySelector('button')
let tp = document.querySelector('.top')
let container = document.querySelector('.container')

btn.addEventListener('click',async function(){
    input.remove()
    btn.remove()
    container.classList.remove('container')
    tp.classList.remove('top')
    tp.innerHTML = ""
    container.classList.add('result')
    let response = getData(input.value)
    let user = await response
    let status = user.status
    if(status == 'FAILED'){
        container.innerHTML = "<h1> USERNAME INVALID </h1>"
    }
    else{
        showData(user)
    }
})

async function getData(username){
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`)
    const data = await res.json()
    return data;
}

function showData(user){
    const handle = document.createElement('h3');
    const photo = document.createElement('img');
    const rank = document.createElement('h6');
    const rating = document.createElement('h6');
    const country = document.createElement('h6');

    handle.innerHTML = user.result[0].handle;
    container.appendChild(handle);
    handle.classList.add('show')
    photo.src = user.result[0].titlePhoto;
    container.appendChild(photo);
    photo.classList.add('pic')
    // photo.style.width = "50px"
    rank.innerHTML = "Rank: " + user.result[0].rank;
    container.appendChild(rank);
    rank.classList.add('show')
    rating.innerHTML = "Rating: " + user.result[0].rating;
    container.appendChild(rating);
    rating.classList.add('show')
    if(user.result[0].city){
        country.innerHTML = "City: " + user.result[0].country;
        container.appendChild(country)
        country.classList.add('show')
    }
    
}