import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../utilities/fakedb';

import './Data.css'

const Data = () => {
    const [prodcuts, setProducts] = useState([]);

    const [cart, setCart]=useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    const handleCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
       
    }
    return (
       <div className='m-10'>
         <div className='container'>
                <div className='m-10'>
                    <div>
                    <div className="avatar h-16">
                     <div className="w-24 mask mask-squircle"> 
                      <img src="/images/logo.svg"  alt=''/> 
                      </div>
                      <span className='font-bold m-5'>Power Gym</span>
                    </div>
                    </div>
                    <p className='font-size:600'>Exercise List - please select</p>
                <div className='data-container'>
                {
                    prodcuts.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                        ></Product>)
                }

                <div>
                    <p className='font-bold'>How Does React Actually Work?</p>
                    <br />
                    <h1>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</h1>
                </div>
                <div>
                <p className='font-bold'>The differences between props and state</p>
                    <br />
                    <h1> <span className='font-bold'> Props:</span> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. <br />
                    <span className='font-bold'>State: </span>  The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                    </h1>
                </div>
                <div>
                <p className='font-bold'>What type of work doing in useEffect</p>
                    <br />
                    <h1>UseEffect use Reading from local storage and also used
                    Registering and deregistering event listeners</h1>
                </div>
                </div>
                </div>
                <div className='cart-container'>
                   <Cart cart={cart}></Cart>
                </div>
        </div>
       </div>
    );
};

export default Data;