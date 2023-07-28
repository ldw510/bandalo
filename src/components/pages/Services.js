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
    <div className=" bg-bandalo-blue py-16" >
        <h1 className='text-white text-6xl font-bold uppercase  w-5/6 mx-auto'>{t('services')}</h1>
        </div>
      <div className="w-5/6 mx-auto" >

        <div className="grid lg:grid-cols-2 py-12">
        <table class="table-auto w-full text-sm text-left text-black text-xl lg:text-2xl dark:text-gray-400">
            <thead>
              <tr>
                <th scope="col" class="px-6 py-3">Usluga</th>
                <th scope="col" class="px-6 py-3">Cijena</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Kiropraktički pregled</td>
                <td class="px-6 py-4">60 €</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Kiropraktički tretman</td>
                <td class="px-6 py-4">40 €</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Kontrolni pregled</td>
                <td class="px-6 py-4">15 €</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 font-semibold"><td class="px-6 py-4">Recovery Room</td></tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 font-semibold"><td class="px-6 py-4">Medicinska masaža</td></tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <td class="px-6 py-4">Parcijalna 60 min</td>
                <td class="px-6 py-4">30 €</td>
                </tr>
                
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Cijelo tijelo 60 min</td>
                <td class="px-6 py-4">35 €</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Cijelo tijelo 90 min</td>
                <td class="px-6 py-4">45 €</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 font-semibold"><td class="px-6 py-4">Sportska masaža</td></tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <td class="px-6 py-4">Parcijalna 60 min</td>
                <td class="px-6 py-4">35 €</td>
                </tr>
                
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Cijelo tijelo 60 min</td>
                <td class="px-6 py-4">40 €</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Cijelo tijelo 90 min</td>
                <td class="px-6 py-4">50 €</td>
              </tr>
             
            </tbody>
          </table>

          <img className="ImageAbout2" src="images/services.jpg" alt="Kiropractor" />


        </div>
        </div>




        <div className='mx-auto py-12'>
        <div className=" bg-bandalo-blue py-16" >
        <h1 className='text-white text-6xl font-bold uppercase  w-5/6 mx-auto'>{t('workinghours')}</h1>
        </div>
        <div className="w-5/6 mx-auto py-16" >


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