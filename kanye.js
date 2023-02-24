function loadQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

function displayQuote(data){
    document.getElementById('quote-container').innerHTML = `<p>${data.quote}</p>`;
}