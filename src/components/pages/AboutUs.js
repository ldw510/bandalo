import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import { useTranslation } from "react-i18next";


function AboutUs () {

  const { t, i18n } = useTranslation();

  const onChange = (event) => {
      i18n.changeLanguage(event.target.value)
  };
    return (
      <>
      <div className="container1" >
        <div className="container1-text">
        <h1>{t('about')}</h1>  
        <p>{t('about-slogan')}</p>
        </div>
        <div className="container1-image">
          <img className="ImageAbout" src="images/Bandalo1.jpg" alt="Kiropractor"/>
        </div>
        <div className="container1-desc">
          <h1>Dr Miro Bandalo</h1>
          <p>{t('about-text')}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    )
}

export default AboutUs;