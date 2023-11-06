import React from 'react';
import cl from './ProductItem.module.css'
import {Link} from "react-router-dom";
const ProductItem = (props) => {
    return (
        <Link to={`/products/${props.id}`} className={cl.item}>
            <div className={cl['item__imageDiv']}>
                <img className={cl['item__image']} src={props.image} alt="image"/>
            </div>
            <h4 className={cl['item__title']}>{props.title}</h4>
            <div className={cl['item__category']}>{props.category}</div>
            <div className={cl['item__price']}>${props.price}</div>
        </Link>
    );
};

export default ProductItem;