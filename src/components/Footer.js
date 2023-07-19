import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 
import { useTranslation } from "react-i18next";

function Footer() {

    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };

    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <a href="tel:099 3220 225">099 3220 225</a>
                        <a href='/services'>{t('testimonials')}</a>
                        <Link to='/contact'>{t('Kontakt')}</Link>
                    </div>
                    <div class="footer-links">
                      <a href="https://web.facebook.com/bandalokiropraktikasplit/" class="fa fa-facebook"></a>
                      <a href="https://www.instagram.com/bandalokiropraktika/?hl=en" class="fa fa-instagram"></a>
                      <a href="https://www.youtube.com/channel/UCtoqj73k8SFbE8Lsw10pfSg" class="fa fa-youtube"></a>
                    </div>
                    <div className="bottom-name">
                      <h1>Bandalo Kiropraktika Split. © 2020. All rights reserved.</h1>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Footer
