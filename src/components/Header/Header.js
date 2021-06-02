import React from 'react';
import './Header.css'
import avatar from '../../images/user/a/5f7d66f3481fc9_71708607.jpg'
import appleMusic from '../../images/social/applemusic-min.svg';
import facebook from '../../images/social/facebook-min.svg'
import instagram from '../../images/social/instagram-min.svg'
import spotify from '../../images/social/spotify-min.svg'
import soundcloud from '../../images/social/soundcloud-min.svg'
import twitter from '../../images/social/twitter-min.svg'
import youtube from '../../images/social/youtube-min.svg'
import location from '../../images/map-pin.svg'
const Header = () => {
    return (
        <div className='header'>
            <img className='profile' src={avatar} alt="" />
            <h1>
                ASHER
            </h1>
            <div className="location">
                <img src={location} alt="" />
                <p>
                    California
                </p>
            </div>
            <small>
                WA artist based in California
            </small>
            <div className="social_links">
                <a href=""  >
                    <img src={appleMusic} alt="" />
                </a>
                <a href=""  >
                    <img src={facebook} alt="" />
                </a>
                <a href=""  >
                    <img src={instagram} alt="" />
                </a>
                <a href=""  >
                    <img src={spotify} alt="" />
                </a>
                <a href=""  >
                    <img src={soundcloud} alt="" />
                </a>
                <a href=""  >
                    <img src={twitter} alt="" />
                </a>
                <a href=""  >
                    <img src={youtube} alt="" />
                </a>
            </div>

        </div>
    );
};

export default Header;