import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import { useTranslation } from "react-i18next";
import { Button } from '../Button';




function Contact () {

  
  const { t, i18n } = useTranslation();

  const onChange = (event) => {
      i18n.changeLanguage(event.target.value)
  };
  
    return (
    <>
        <div>
        <div className="container-contact" >
        <div className="contact-text">
        <h1>{t('contact')}</h1>  
        <p><br/>
        HR | PUT BRODARICE 6, <br/>
21000 Split <br/>
| + 385 (99) 3220 225 <br/>
info@bandalokiropraktikasplit.com <br/>
www.bandalokiropraktikasplit.com <br/>
 </p>
 </div>
        </div>
        <div className="map">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfouY3X8esD7sjHuxQfa5YhDa9yH1UpLRbXEsNt4ilHTPOHyQ/viewform?embedded=true" width="400" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <iframe width="320" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Bandalo%20Kiropraktika%20Split+(Bandalo%20Kiropraktika%20Split)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/draw-radius-circle-map/"></a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    )
}

export default Contact;