import React from 'react';
import arrow from '../../images/link-button-arrow.svg'
import './LinkCard.css'
const LinkCard = ({ data }) => {
    const { title, link, icon, color } = data;
    return (
        <div className='link_card'>
            <div className='beacon' style={{ backgroundColor: color }}>

            </div>
            <img className='icon ' src={icon} alt="" />
            <div className="content">
                <h3 className="title">
                    {title}
                </h3>
                <small className='link'>
                    {link}
                </small>
            </div>
            <img className='arrow' src={arrow} alt="" />

        </div>
    );
};

export default LinkCard;