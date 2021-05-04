import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Steps from '../Steps';
import { useTranslation } from "react-i18next";
import Testimonials from '../Testimonials';




function Services () {
  
  const { t, i18n } = useTranslation();

  const onChange = (event) => {
      i18n.changeLanguage(event.target.value)
  };
  
    return (
    <>
        <div className="container1" >
        <div className="container1-text">
        <h1>{t('services')}</h1>  
        </div>
        <div className="container1-image">
          <img className="ImageAbout2" src="images/services.jpg" alt="Kiropractor" />
        </div>
      <div className="container1-desc">
        <h1>{t('workinghours')}</h1>
        <p>
        {t('monday')}<br/>
        {t('tuesday')}<br/>
        {t('wednesday')}<br/>
        {t('thursday')}<br/>        
        {t('friday')}<br/>        
        {t('saturday')}<br/>
        {t('sunday')}<br/>        
        </p>
      </div>
    </div>
    <Testimonials/>
    <Footer />
    </>
    )
}

export default Services;