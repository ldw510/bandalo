import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Hero.css';
import { useTranslation } from "react-i18next";


function Hero() {
    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };
    return (
        <div className='hero-container'>
            <video src="/images/HeroVid.mp4" autoPlay loop muted />
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle="btn--outline" buttonSize="btn--large">
                {t('contact')}
                </Button>
            </div>
        </div>
    )
}

export default Hero
