import './addRecipe.css';
import { useEffect, useState } from "react"

export const AddRecipe = () => {

    const [form, setForm] = useState({
        recipeTitle: "",
        ingredients: "",
        time: "",
        imgUrl: "",
        instructions: ""
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            form
        }
        fetch("http://localhost:3001/recipe", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="recipeTitle" id="" placeholder="Recipe Title" />
            <br />
            <input onChange={handleChange} type="text" name="ingredients" id="" placeholder="Ingredients" />
            <br />
            <input onChange={handleChange} type="text" name="time" id="" placeholder="Total Time Required" />
            <br />
            <input onChange={handleChange} type="text" name="imgUrl" id="" placeholder="Enter Image URL" />
            <br />
            <input onChange={handleChange} type="text" name="instructions" id="" placeholder="Instrucetions" />
            <br />
            <input onChange={handleSubmit} type="submit" name="" id="" />
        </form>
    )
}





