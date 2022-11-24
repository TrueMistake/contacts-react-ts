import React, {FC} from 'react';
import {CardObject} from "../types/Types";

const Card:FC<CardObject> = ({item, index, showAgeContact}) => {
  return (
    <div key={item.id.value} className="contacts-item">
      <img src={item.picture.large} alt="" className="contacts-item__img"/>
      <div className="contacts-item__body">
        <div className="contacts-item__name">Name: {item.name.first} {item.name.last}</div>
        <div className="contacts-item__email">Email: {item.email}</div>
        {item?.showAge
          ? <div className="contacts-item__age">Age: {item.dob.age}</div>
          : <button className="contacts-item__btn" onClick={() => showAgeContact(index)}>Show age</button>
        }
      </div>
    </div>
  );
};

export default Card;