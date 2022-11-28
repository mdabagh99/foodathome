import React, { useState, useEffect } from "react";

const Recipe  = ({id}) => {

  const [recipeData, setRecipeData] = useState([])

  const API_KEY = '6d2ec99d0f7543789288bcd740d8156c';

  useEffect(() => {
    getRecipeData();
  }, [id]);

  const getRecipeData = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    const data = await response.json();

    setRecipeData(data);
    console.log(data)


  };



  return (
    <div className='col-md-4 recipe-block'>
        <h2 className="text-center">{recipeData.title}</h2>
        <img src={recipeData.image} alt="" className="recipe-img mx-auto d-block"/>
        <a href={recipeData.sourceUrl}><button className="btn-cook mx-auto d-block" id="recipe-btn">See Full Recipe</button></a>
    </div>
  )
};

export default Recipe;

