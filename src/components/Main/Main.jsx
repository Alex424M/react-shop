import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        (async function(){
            const response = await fetch('https://fakestoreapi.com/products');
            const items = await response.json();
            setProducts(items);
            setIsLoading(false);
        })();
    },[])
    return (
        <>
            <h1 className="headerTitle">Товары:</h1>
            {isLoading && <h2>Загрузка...</h2>}
            <div className="products">
                {products.map((item)=>
                    <ProductItem {...item} />
                )}
            </div>
        </>
    );
};

export default Main;