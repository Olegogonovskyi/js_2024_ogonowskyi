import React, {FC} from 'react';
import Iproductmodel from "../../models/Iproductmodel";

const Product:FC<Iproductmodel> = ({id, brand, title, description, price, images}) => {
    return (
        <div>
            <hr/>
            <h1>{id}. {title} from {brand} only {price}</h1>
            {
                images.map((image, index) => <img key={index} src={image} alt={title}/> )
            }
            <p>{description}</p>
            <hr/>
        </div>
    );
};

export default Product;