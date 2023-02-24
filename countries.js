function loadCountries(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

function  displayCountries(data){
    const container = document.getElementById('container');
    for(const i of data){
        // console.log(i);
        const li = document.createElement('li');
        li.classList.add('country');
        li.innerHTML = `<img src=${i.flags.svg}>
        <p>${i.name.official}</p>
        <p>${i.capital ? i.capital[0] : 'No Capital %'}</p>
        <button onclick='loadCountriesDetails("${i.cca2}")'>Details</button>
        `;
        container.appendChild(li);       
    }
}

loadCountries();

function loadCountriesDetails(code){
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}

function displayCountriesDetails(country){
    document.getElementById('details').innerHTML = `<img src=${country.flags.svg}>`;
}