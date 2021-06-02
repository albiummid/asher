import React from 'react';
import './Home.css'
import Header from '../components/Header/Header';
import soundCloud from '../images/link/soundcloud.svg'
import buymeacoffee from '../images/link/buymeacoffee.svg'
import gofundme from '../images/link/gofundme.svg'
import google from '../images/link/google.svg'
import lum from '../images/link/lum.svg'
import link from '../images/logo/solo-icon.svg'
import link2 from '../images/logo/solo-icon.svg'
import LinkCard from '../components/LinkCard/LinkCard';
import Footer from '../components/Footer/Footer';
const linkData = [
    {
        title: 'NEW TUNE!',
        link: 'https://soundcloud.app.goo.gl/eT3z88NnBy3DDZkH7',
        icon: soundCloud,
        color: '#f8640ea6',
    },
    {
        title: 'Stop Asian Hate',
        link: 'https://gofundme.com/AAPI',
        icon: gofundme,
        color: '#00b964d9'
    },
    {
        title: 'ASHER',
        icon: link,
        color: '#3673fdd9'
    },
    {
        title: 'Buy  A S H E R  a coffee',
        icon: buymeacoffee,
        color: '#c2a800a6'
    },
    {
        title: 'A S H E R  on DarkRoom',
        icon: link2,
        color: '#3673fdd9'
    },
    {
        title: 'A S H E R on Spoon',
        icon: google,
        color: 'white'
    },
    {
        title: 'A S H E R  on LUM',
        icon: lum,
        color: '#E515B1'
    },
]
const Home = () => {
    return (
        <div className='home_container'>

            <div className="container">
                <Header />
                <div className="card_container">
                    {
                        linkData.map((data, index) => <LinkCard data={data} />)
                    }
                </div>
                <Footer />
            </div>


        </div>
    );
};

export default Home;