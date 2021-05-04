import React from 'react';
import './Steps.css';
import { useTranslation } from "react-i18next";

function Steps() {
    
    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };
    
    return (
    <div className="container">
        <div className="header">
            <h1>{t('method')}</h1>
        </div>
        <div className="steps-container">
            <div className="step12">
                <h1>1</h1>
                <h2>{t('step1')}</h2>
                <br/>
                <p>{t('step1-text')}</p>
            </div>
            <div className="step12">
                <h1>2</h1>               
                <h2>{t('step2')}</h2>
                <br/>
                <p>{t('step2-text')}</p>
            </div>
            <div className="step12">
            <h1>3</h1>
                <h2>{t('step3')}</h2>
                <br/>
                <p>{t('step3-text')}</p>
            </div>
            <div className="step12">
            <h1>4</h1>
                <h2>{t('step4')}</h2>
                <br/>
                <p>{t('step4-text')}</p>
            </div>           
        </div>
        <div className="steps-container">
            <div className="step12">
            <img className="ImageSteps" src="images/step1.jpg" alt="Kiropractor"/>
            </div>
            <div className="step12">
            <img className="ImageSteps" src="images/step2.jpg" alt="Kiropractor"/>
            </div>
            <div className="step12">
            <img className="ImageSteps" src="images/step3.jpg" alt="Kiropractor"/>
            </div>
            <div className="step12">
            <img className="ImageSteps" src="images/step4.jpg" alt="Kiropractor"/>
            </div>           
        </div>
    </div>
        
    )
}

export default Steps
