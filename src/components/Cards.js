import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Our Partners</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/nada-rugby.png" 
                        path="https://www.nada-rugby.hr/">
                        </CardItem>
                        <CardItem src="images/radio-split.png" 
                        path="https://radio.hrt.hr/radio-split/">
                        </CardItem>
                        <CardItem src="images/hrvatski-olimpijski-odbor.png" 
                        path="https://www.hoo.hr/hr/">
                        </CardItem>
                        <CardItem src="images/joker-logo.svg" 
                        path="https://joker.hr/en/">
                        </CardItem>
                        <CardItem src="images/team-canada.png" 
                        path="https://olympic.ca/">
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
