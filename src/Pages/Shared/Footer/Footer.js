import React from 'react';

const Footer = () => {
    let year =  new Date().getFullYear();
    return (
        <footer className='text-center mt-5'>
           <h6>Copyright&copy;{year} || Md Mursalin Dowla </h6> 
        </footer>
    );
};

export default Footer;