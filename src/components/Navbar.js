import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { Button } from './Button';
import { useTranslation } from "react-i18next";



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
          } else {
            setButton(true);
          }
      };

    useEffect(() => {
        showButton();
    },  []);  

    window.addEventListener('resize', showButton);

    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    };
    
    
    return (
        <>
          <nav className ="navbar">
              <div className ="navbar-container">
                  <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                  </Link>
                  <a className="phone" href="tel:099 3220 225">099 3220 225</a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className ={click ?'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        {t('home')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>
                        {t('about')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                        {t('services')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                        {t('contact')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href='https://drbandalo.wordpress.com/' className="nav-links" onClick={closeMobileMenu}>
                        {t('BLOG')}
                        </a>
                    </li>
                    <select className="lang-btn" name="language" onChange={onChange}>
                      <option value="hr">HR</option>
                      <option value="en">EN</option>
                    </select>
                </ul>
              </div>
          </nav>

        </>
    )
}

export default Navbar
