import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Have a look at some of my previous work...</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/nicoa.png" 
                        text="HOSTEL NICOA" 
                        label="website" 
                        path="https://hostelnicoa.com/">
                        </CardItem>
                        <CardItem src="images/LEWL.png" 
                        text="Learn English with Leah" 
                        label="website" 
                        path="https://learnenglishwithleah.com/">
                        </CardItem>
                        <CardItem src="images/weather.png" 
                        text="Weather Report" 
                        label="mobile site" 
                        path="https://weather-report-htre2s9vo-ldw510.vercel.app/">
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
