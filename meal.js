
const loadMeals = searchText =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const container = document.getElementById('meals-container');
    container.innerHTML ='';
    meals.forEach(meal =>{
        console.log(meal);
        
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
                <img src=${meal.strMealThumb} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        container.appendChild(mealDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
})
