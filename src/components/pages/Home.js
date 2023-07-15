import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Cards from '../Cards'
import Footer from '../Footer';
import Steps from '../Steps';
import Insta from '../Insta';


function Home () {
    return (
        <>
          <Hero />
          <Steps />
          <Cards/>
          <Footer />
        </>
    )
}

export default Home;