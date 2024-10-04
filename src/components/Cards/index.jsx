import React from 'react'
import { useNavigate } from "react-router-dom";
import './Cards.scss'

function Card({ id, picture, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/fiche-logement/${id}`);
  };
  
  return (
   
      <div className="card"  style={{ backgroundImage: `url(${picture}), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%)` }} onClick={handleClick}>
     <h3>{title}</h3>
      </div>

  );
}

export default Card;
