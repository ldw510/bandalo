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
      <div className="w-5/6 mx-auto" >
      <h1 className='text-bandalo-blue text-6xl font-bold uppercase py-12'>Dr Miro Bandalo</h1>

        <div className="grid lg:grid-cols-2 gap-12 py-6">
        <div className="">

          <p className='text-xl'>{t('about-text')}</p>
        </div>


        <div className="">
          <img className="" src="images/Bandalo1.jpg" alt="Kiropractor"/>
        </div>
        </div>

        
      </div>
      <div>
        <Footer />
      </div>
    </>
    )
}

export default AboutUs;