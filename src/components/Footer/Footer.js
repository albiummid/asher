import React from 'react';
import './Footer.css'
import link from '../../images/logo/solo-favicon.png'
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={link} alt="" />
                <small>
                    solo.to
                </small>
            </div>
            <small>
                create page
            </small>
        </footer>
    );
};

export default Footer;