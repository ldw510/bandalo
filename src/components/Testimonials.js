import React from 'react';
import './Steps.css';
import { useTranslation } from "react-i18next";

function Testimonials() {
    
    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };
    return (
        <div className="container" >
        <div className="header">
            <h1>{t('testimonials')}</h1>
        </div>
        <div className="steps-container2">
            <div className="testimonial-container">
              <video controls className="videotestimonial" src="/images/Testimonial1.mp4"/>
            </div>
            <div className="testimonial-container">
            <video controls className="videotestimonial" src="/images/Testimonial2.mp4"/>
            </div>
            <div className="testimonial-container">
            <video controls className="videotestimonial" src="/images/Testimonial3.mp4"/>
            </div>          
        </div>
    </div>
    )
}

export default Testimonials
