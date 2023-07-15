import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Steps from '../Steps';
import { useTranslation } from "react-i18next";
import Testimonials from '../Testimonials';




function Services() {

  const { t, i18n } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value)
  };

  return (
    <>
      <div className="w-5/6 mx-auto" >
        <h1 className='text-bandalo-blue text-6xl font-bold uppercase py-12'>{t('services')}</h1>

        <div className="grid lg:grid-cols-2 py-12">
          <ul className='text-xl lg:text-2xl'>
            <li>
              Kiropraktički pregled - 60 €
            </li>
            <li>Kiropraktički tretman - 40 €
            </li>
            <li>Kontrolni pregled - 15 €
            </li>
            Recovery Room

            Medicinska masaža
            <li>
              Parcijalna 60 min - 30 €

            </li>
            <li>Cijelo tijelo 60 min - 35 €

            </li>
            <li>Cijelo tijelo 90 min - 45 €

            </li>


            Sportska masaža
            <li>
              Parcijalna 60 min - 35 €


            </li>
            <li>Cijelo tijelo 60 min - 40 €


            </li>
            <li>Cijelo tijelo 90 min - 50 €


            </li>


          </ul>

          <img className="ImageAbout2" src="images/services.jpg" alt="Kiropractor" />


        </div>



        <div className='mx-auto py-12'>
          <h4 className='text-bandalo-blue text-6xl font-bold uppercase py-12'>{t('workinghours')}</h4>

          <table class="table-auto w-full text-sm text-left text-black text-xl lg:text-2xl dark:text-gray-400">
            <thead>
              <tr>
                <th scope="col" class="px-6 py-3">Day</th>
                <th scope="col" class="px-6 py-3">Working Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('monday')}</td>
                <td class="px-6 py-4">{t('mondaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('tuesday')}</td>
                <td class="px-6 py-4">{t('tuesdaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('wednesday')}</td>
                <td class="px-6 py-4">{t('wednesdaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('thursday')}</td>
                <td class="px-6 py-4">{t('thursdaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('friday')}</td>
                <td class="px-6 py-4">{t('fridaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('saturday')}</td>
                <td class="px-6 py-4">{t('saturdaytime')}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{t('sunday')}</td>
                <td class="px-6 py-4">{t('sundaytime')}</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Services;