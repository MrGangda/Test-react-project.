import React, {useState} from 'react';
import './PostItem.css'
import {IProduct} from "../../models";

interface ProductProps {
    product: IProduct
}

const PostItem = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)
    const btnBgClass = details ? 'btn_show' : 'btn__hide'
    const btnClasses = ['post__btn', btnBgClass]

    return (
        <div className="post">
            <img src={product.image} alt=""/>
            <div className='post__title'>{product.title}</div>
            <div className='post__price'>{product.price}</div>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: "bold"}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    );
};

export default PostItem;