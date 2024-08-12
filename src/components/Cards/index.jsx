import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'


function Card({ picture, title }) {
  return (
    <div style={{ ...styles.card, backgroundImage: `url(${picture}), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%)` }}>
    <h3 style={styles.title}>{title}</h3>
    </div>
  );
}

const styles = {

  card: {
    width: '340px',
    height: '340px',
    borderRadius: '25px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative', 
    overflow: 'hidden',
  },
  
  image: {
    width: '340px',
    height: '340px', 
    objectFit: 'cover',
    borderRadius: '25px',
  },

  title: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    padding: '5px 10px',
    color: 'white', 
  },
}

export default Card;
