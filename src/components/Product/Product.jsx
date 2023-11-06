import React, {useEffect, useState} from 'react';
import cl from "./Product.module.css";

const Product = ({id}) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        (async function(){
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const item = await response.json();
            setProduct(item);
            setIsLoading(false);
        })();
    },[])

    return (
        <div className={cl['item']}>
            {isLoading && <h2>Загрузка...</h2>}

            <div className={cl['item__block']}>
                <img className={cl['item__image']} src={product.image} alt="image"/>
            </div>
            <div className={cl['item__block']}>
                <h4 className={cl['item__title']}>{product.title}</h4>

                <div className={cl['item__category']}>{product.category}</div>
                <div className={cl['item__price']}>${product.price}</div>
                <div className={cl['item__description']}>{product.description}</div>
            </div>

        </div>
    );
};

export default Product;