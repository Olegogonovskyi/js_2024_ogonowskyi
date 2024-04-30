import React, {FC} from 'react';
import IProductprops from "../../models/IProductprops";
import styles from "./Product.module.css"



const Product: FC<IProductprops> = ({
                                        id,
                                        title,
                                        category,
                                        price,
                                        description,
                                        brand,
                                        images,
                                        rating,
                                        stock,
                                        discountPercentage,
                                        thumbnail
                                    }) => {
    return (
        <div>
            <hr/>
            <p>{category}</p>
            <h2 className={styles.maintitle}>&#9996; {id }. {title} from {brand} only today new PRICE &#9886; {price} &#36; &#9887; - {discountPercentage} &#8453; &#9996;</h2>
            <div className={styles.imgcontainer}>
                {
                    images.map((image, index) => <img src={image} key={index} alt={title}/>)
                }
            </div>
            <p>{description}</p>
            <p>rating: {rating} & stock: {stock}</p>
            <hr/>

        </div>
    );
};

export default Product;