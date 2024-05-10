import React, {FC, useEffect, useState} from 'react';
import {IRecipesbase} from "../../models/IRecipesbase";
import {getAllRecipes} from "../../servises/axios.api.servise";

const Reccomptest: FC = () => {
   const [recipes, setRecipes] = useState<IRecipesbase[]>([])
    useEffect(() => {
        getAllRecipes().then(value =>  console.log(value.data))
    }, []);
    return (
        <div>

        </div>
    );
};

export default Reccomptest;