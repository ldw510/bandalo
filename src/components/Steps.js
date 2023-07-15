import React from 'react';
import './Steps.css';
import { useTranslation } from "react-i18next";

function Steps() {

    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };

    return (
        <div className="w-full bg-white py-16">

            <div className="w-5/6 mx-auto py-12">
                <h1 className='text-bandalo-blue text-6xl font-bold uppercase'>{t('method')}</h1>
            </div>


            <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto py-12">
                <div className=''>

                    <div
                        className="step-1 relative transition ease-in-out delay-150 duration-300 text-white "
                        key="1"
                    >
                        <div class=" card-v3 hover:bg-transparent transition ease-in-out delay-150 duration-300 ">
                            <div class="card-v3__link ">
                                <figure class="card-v3__img rounded-lg relative">
                                    <div className='grid grid-cols-2'>
                                        <div class="card-v3__label p-4 uppercase text-xs">1</div>
                                        <div class="card-v3__label relative"><img className='h-20 absolute right-0' src="" /></div>
                                    </div>

                                    <img className='h-full w-full' src="images/step1.jpg" />

                                </figure>

                            </div>




                        </div>



                    </div>
                    <div className='p-4 bg-bandalo-blue  bottom-0'>
                        <h3 className="font-bold text-3xl text-white uppercase">{t('step1')}</h3>
                        <p className=" text-lg font-thin text-white">{t('step1-text')}
                        </p>
                    </div>

                </div>

                <div>

                    <div
                        className="step-2 relative transition ease-in-out delay-150 duration-300 text-white"
                        key="2"
                    >
                        <div class=" card-v3 hover:bg-transparent transition ease-in-out delay-150 duration-300">
                            <div class="card-v3__link " aria-label="Description of the link">
                                <figure class="card-v3__img rounded-lg relative">
                                    <div className='grid grid-cols-2'>
                                        <div class="card-v3__label p-4 uppercase text-xs">2</div>
                                        <div class="card-v3__label relative"><img className='h-20 absolute right-0' src="" /></div>
                                    </div>

                                    <img className='h-full w-full' src="images/step2.jpg" />

                                </figure>

                            </div>




                        </div>



                    </div>
                    <div className='p-4 bg-bandalo-blue  bottom-0'>
                        <h3 className="font-bold text-3xl text-white uppercase">{t('step2')}</h3>
                        <p className=" text-lg font-thin text-white">{t('step2-text')}
                        </p>
                    </div>

                </div>

                <div>

                    <div
                        className="step-3 relative transition ease-in-out delay-150 duration-300 text-white"
                        key="3"
                    >
                        <div class=" card-v3 hover:bg-transparent transition ease-in-out delay-150 duration-300">
                            <div class="card-v3__link " aria-label="Description of the link">
                                <figure class="card-v3__img rounded-lg relative">
                                    <div className='grid grid-cols-2'>
                                        <div class="card-v3__label p-4 uppercase text-xs">3</div>
                                        <div class="card-v3__label relative"><img className='h-20 absolute right-0' src="" /></div>
                                    </div>

                                    <img className='h-full w-full' src="images/step3.jpg" />

                                </figure>

                            </div>




                        </div>



                    </div>
                    <div className='p-4 bg-bandalo-blue  bottom-0'>
                        <h3 className="font-bold text-3xl text-white uppercase">{t('step3')}</h3>
                        <p className=" text-lg font-thin text-white">{t('step3-text')}
                        </p>
                    </div>

                </div>

                <div>

                    <div
                        className="step-4 relative transition ease-in-out delay-150 duration-300 text-white"
                        key="4"
                    >
                        <div class=" card-v3 hover:bg-transparent transition ease-in-out delay-150 duration-300">
                            <div class="card-v3__link " aria-label="Description of the link">
                                <figure class="card-v3__img rounded-lg relative">
                                    <div className='grid grid-cols-2'>
                                        <div class="card-v3__label p-4 uppercase text-xs">4</div>
                                        <div class="card-v3__label relative"><img className='h-20 absolute right-0' src="" /></div>
                                    </div>

                                    <img className='h-full w-full' src="images/step4.jpg" />

                                </figure>

                            </div>




                        </div>



                    </div>
                    <div className='p-4 bg-bandalo-blue  bottom-0'>
                        <h3 className="font-bold text-3xl text-white uppercase">{t('step4')}</h3>
                        <p className=" text-lg font-thin text-white">{t('step4-text')}
                        </p>
                    </div>

                </div>

                






            </div>




        </div>

    )
}

export default Steps
