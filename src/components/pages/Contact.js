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
        <div className=" bg-bandalo-blue py-16" >
        <h1 className='text-white text-6xl font-bold uppercase  w-5/6 mx-auto'>{t('contact')}</h1>
        </div>
        <div className="w-5/6 mx-auto">
  
        <p><br/>
        HR | PUT BRODARICE 6, <br/>
21000 Split <br/>
| + 385 (99) 3220 225 <br/>
info@bandalokiropraktikasplit.com <br/>
 </p>
 </div>
        </div>

        <section className="hero ">
          <div className="bg-bandalo-blue py-20">
          <div className="bg-background w-5/6 md:w-4/6 mx-auto bg-opacity-70">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p className="mb-8 lg:mb-16 font-light text-center text-white text-xl">Send us a message if you'd like more info.</p>


  <div  className="w-5/6 mx-auto">

  <form action=""
  method="POST" className="space-y-8">


  < div  >
    < label htmlFor='name' className="block mb-2 text-sm font-medium text-white ">Name</label>
    < input type='text' name='name' aria-label="Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />
  </div>
  < div className="" >
    < label htmlFor='email' className="block mb-2 text-sm font-medium text-white  ">Email</label>
    < input type='email'  name='email' aria-label="Email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />
  </div>
  < div className="sm:col-span-2" >
    < label htmlFor='message' className="block mb-2 text-sm font-medium text-white  dark:text-gray-400">Message</label>
    < input type='text'  name='message' aria-label="Message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
  </div>
  <input type='submit' className="mx-auto rounded-xl bg-white py-2 px-2 text-is-navy font-bold hover:bg-blue-500 hover:text-white hover:cursor-pointer	" />
  </form>
</div>
</div>
</div>
</div>
</section>
        <div className="map">
        <iframe width="320" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Bandalo%20Kiropraktika%20Split+(Bandalo%20Kiropraktika%20Split)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/draw-radius-circle-map/"></a>
        </div>

        
      <div>

        
        <Footer />
      </div>
    </>
    )
}

export default Contact;