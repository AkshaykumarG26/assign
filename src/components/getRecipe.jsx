import './getRecipe.css'

import { useEffect, useState } from "react/cjs/react.development"

export const GetRecipe = () => {

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        getRecipe()
    },[])

    useEffect(() => {
        getDetailes()
    },[])


    const getRecipe = () => {
        fetch("http://localhost:3001/recipe")
        .then((d) => d.json())
        .then((res) => {
            setRecipe(res)
        })
    }

    const getDetailes = () => {
        return (
            fetch("http://localhost:3001/recipe")
            .then((d) => d.json())
            .then((res) => {
                <div>
                    res
                </div>
            })  
        )
    }

    return(
        <div className='getRecipe'>   
            {recipe.map(e => (
                <div>Recipe Title: {e.form.recipeTitle} Cooking Time: {e.form.time}

                <button onClick={getDetailes}>Get Details</button>
                </div>
                ))}
        </div>
    )
}