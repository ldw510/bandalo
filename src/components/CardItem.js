import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item mx-auto'>
        <a className='' href={props.path}>
            <img
              className='cards__item__img h-16'
              alt={props.text}
              src={props.src}
            />
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a >
      </li>
    </>
  );
}

export default CardItem;