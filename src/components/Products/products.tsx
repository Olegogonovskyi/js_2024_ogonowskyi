import React, {FC, useEffect, useState} from 'react';
import Iproductmodel from "../../models/Iproductmodel";
// import getallProducts from "../../services/products.api";
import Product from "../Product/product";

const Products: FC = () => {
    const [products, setProducts] = useState<Iproductmodel[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(value => value.json()).then(({products}) => setProducts(products))
        // getallProducts().then(value => )


    }, [])


    return (
        <>
            {
                products.map(({images, price, brand, id, title, description}) => <Product key={id} id={id} images={images} description={description} price={price} brand={brand} title={title} />)
            }
        </>
    );
};

export default Products;