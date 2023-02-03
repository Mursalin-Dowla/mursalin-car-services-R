import React from 'react';

const Footer = () => {
    let year =  new Date().getFullYear();
    return (
        <footer>
           <h4>Copyright&copy;{year} || Md Mursalin Dowla </h4> 
        </footer>
    );
};

export default Footer;