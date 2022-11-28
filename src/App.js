import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';


const App = () => {

  const API_KEY = '6d2ec99d0f7543789288bcd740d8156c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken,tomatoes,rice");
  

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}&number=5`);
    const data = await response.json();

    setRecipes(data);


  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };  
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <section>
      <div className='instructions container-fluid bg-light' id='recipe-generator'>
        <h1 className='text-center'>Recipe Generator</h1>
        <p>Enter your ingredients in a list, separated by commas, then hit 'Cook' to return your recipes!</p>      
        <form className='search-form' id='search-form' onSubmit={getSearch}>
            <input 
              className='search-bar' 
              type="text" 
              value={search} 
              onChange={updateSearch}
              placeholder='e.g. chicken,tomatoes,rice'              
            />
            <button className='btn-cook' id='btn-search' type='submit'>Cook</button>
        </form>
    </div>
    <div className='recipe-list container-fluid bg-light' id='recipes'>
      <div className='row justify-content-around'>
        {recipes.map(recipe => (
              <Recipe 
                key={recipe.id}
                id={recipe.id}
              />
          ))}
      </div>
      
    </div>
    
    </section>
  );
}

export default App;