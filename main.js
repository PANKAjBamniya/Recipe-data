let input = document.querySelector('input');
let button = document.querySelector('button');
let contant = document.querySelector('.recipes')

const fetchApi = async (item) =>{

    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        const apiData = await api.json();

        contant.innerHTML = '';
        apiData.meals.forEach(meal => {
            // console.log(meal)
             const recipeDiv = document.createElement('div')
             recipeDiv.classList.add('recipe');
             recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strArea}</p>
                <p>${meal.strCategory}</p>
             `
             contant.appendChild(recipeDiv)
             
        });
    } catch (error) {
        throw new error("error aa gai bhai")
    }
}

button.addEventListener('click',(e) =>{
    e.preventDefault();
    let searchinput = input.value;
    fetchApi(searchinput);
   
})

