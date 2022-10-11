import React from 'react';
import './Product.css'

const Product = ({product, handleCart}) => {
// const {product, handleCart}= props;


    // console.log(props.product)
    // const {handleClick}=props;
    
    const {name, img, dis, age, time} = product;
    // console.log(props)
   
    return (
        <div>
            
        <div className='product'>
        <img src={img} alt="" />
        <div className='info'>
        <p className='product-name'>{name}</p>
        <p>{dis}</p>
        <div className='another'>
        <p>For Age: {age}</p>
        <p>Time required: {time}s </p>
        </div>
        </div>

        <button onClick={() => handleCart(product)} className="btn btn-primary m-5">Add to List</button>

        </div>
        </div>
    );
};

export default Product;

