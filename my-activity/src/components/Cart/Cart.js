import React, { useState } from 'react';
import './Cart.css'




const Cart = (props) => {
    const {cart} = props;
    const getBreakTime = localStorage.getItem('breakTime')
    const [breakTime, setBreakTime] = useState(getBreakTime? getBreakTime : "");
    const [open, setOpen] = useState(false);
    const saveToStorage = (data) => {
        setBreakTime(data);
        localStorage.setItem("breakTime", data);
    }
    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }
    return (
        <div className='cart'>
        <div className=' m-3'>
             <div className='flex'> 
                    <div className="avatar h-16">
                     <div className="w-24 mask mask-squircle"> 
                      <img src="/images/azizul.jpg"  alt=''/> 
                      </div>
                      <span className='font-bold'>Md.Jahid Khan</span>
                    </div>
                    </div>
                    <div>
                        <br />
                        <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                        <div className="stat-title">65 kg</div>
                            <div className="stat-desc">Weight</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">5.6</div>
                            <div className="stat-desc">Height</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">34</div>
                            <div className="stat-desc">Age</div>
                        </div>
                        </div>
                    </div>
                        <br />
                        <br />
                        <div className=''>
                        <p>Add A Break</p>
                        <div className=''>
                        <button className="btn btn-info" onClick={() => saveToStorage("10")}>10s</button>
                    <button className="btn btn-success" onClick={() => saveToStorage("20")}>20s</button>
                    <button className="btn btn-warning" onClick={() => saveToStorage("30")}>30s</button>
                    <button className="btn btn-error" onClick={() => saveToStorage("40")}>40s</button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3 >Exercise Details</h3>
                        <br />
                        <p>Exercise time :{total} seconds </p>
                        <p>Break Time : {breakTime} seconds</p>
                    </div>
                    <br />
                    <button className="btn btn-secondary" onClick={() => setOpen(true)}>Activity Completed</button>
                    {
                        open ? <div className="toast">
                        <div className="alert alert-info">
                          <div>
                            <span>Submit Done.</span> <span style={{cursor: "pointer"}} onClick={() => setOpen(false)}>Close</span>
                          </div>
                        </div>
                      </div> : null
                    }
               
        </div>
        </div>
    );
};
export default Cart;