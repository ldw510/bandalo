import React from 'react';
import './Insta.css';
import { useTranslation } from "react-i18next";


function Insta() {

    const { t, i18n } = useTranslation();

  const onChange = (event) => {
      i18n.changeLanguage(event.target.value)
  };
    return (
        <div>
          <div className="insta-container1">
            <h1>{t('Instagram')}</h1>
            <iframe src="https://snapwidget.com/embed/930224" className="snapwidget-widget-website" allowtransparency="true" frameborder="0" scrolling="no" ></iframe>
          </div>
          <div className="insta-container2">
            <h1>{t('Instagram')}</h1>
            <iframe src="https://snapwidget.com/embed/933600" className="snapwidget-widget-mobile" allowtransparency="true" frameborder="0" scrolling="no" ></iframe>        
          </div>
        </div>

    )
}

export default Insta
