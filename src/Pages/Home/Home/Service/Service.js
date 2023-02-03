import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p><small>Charge: ${price}</small></p>
            <h4>Description:{description}</h4>
        </div>
    );
};

export default Service;