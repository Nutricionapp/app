import React ,{useState, useEffect} from "react";

import style from "./style.module.scss"

import NavbarAll from "../components/Navbar";
import API from "../services/http-common.js";


const Recipes = () => {

    const[recipesData,setRecipesData] = useState([]);

    const getRecipes=async () =>{
        return await API.get('receta/').then((response)=>{
            setRecipesData(JSON.parse(JSON.stringify(response.data)));
        }).catch((error)=>{
            console.log(error);
        });
        
    }

    useEffect(() => {
        getRecipes();
      }, []);

    return (<>
        <NavbarAll/>
        <h1 className="title mb-4">Recetas</h1>
        <div class={style.productsContainer}>
            {recipesData.map((recipe,i) =>(     
                <div key={i} className={style.product}>
                    <img src={recipe.photo} alt={recipe.nombre_receta} width="250" height="200"/>
                    <>
                    <div>
                        <p>{recipe.nombre_receta} - {recipe.tipo_comida}</p>
                    </div>
                    {/* <a onClick={() => handleOpenModalSpecificationPost(post._id)}>Ver detalles</a> */}
                    <a>Ver detalles</a>
                    </>
                </div> 
            ))}
        </div> 
    </> );
}
 
export default Recipes;