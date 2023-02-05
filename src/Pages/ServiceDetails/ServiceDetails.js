import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='min-vh-100'>
            <h1>Service Details:{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;