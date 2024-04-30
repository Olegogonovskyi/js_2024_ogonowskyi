import React, {FC, useEffect, useState} from 'react';
import IProductprops from '../../models/IProductprops';
import Product from "../Product/Product";


const Products: FC = () => {
    const [products, setProducts] = useState<IProductprops[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => setProducts(products))
    }, []);
    return (
        <div>
            {
                products.map(({
                                  title,
                                  rating,
                                  id,
                                  images,
                                  discountPercentage,
                                  description,
                                  price,
                                  brand,
                                  thumbnail,
                                  category,
                                  stock
                              }) => <Product key={id} title={title} id={id} brand={brand} category={category}
                                             description={description} discountPercentage={discountPercentage}
                                             images={images} price={price} rating={rating} stock={stock}
                                             thumbnail={thumbnail}/>)
            }
        </div>
    );
};

export default Products;
