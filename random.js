function loadUser(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data){
    // console.log(data.results.picture.thumbnail)
    document.getElementById('user-container').innerHTML = `
    <img src =${data.results[0].picture.large}>
    <h4> ${data.results[0].name.first} </h4>
    `;
}