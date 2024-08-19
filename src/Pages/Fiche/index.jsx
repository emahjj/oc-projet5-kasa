import React from 'react';
import { useParams } from 'react-router-dom';
import './Fiche.scss';
import apartmentsData from '../../data/Apartments.json';
import Carousel from '../../components/Carousel';

function Fiche() {
    const { id } = useParams(); 
    const apartment = apartmentsData.find(apartment => apartment.id === id); 
  
    if (!apartment) {
      return <div>Appartement non trouvé</div>; 
    }

  return (
        <div className="">
            <Carousel
                key={apartment.id} 
                title={apartment.title}
                description={apartment.description}
                location={apartment.location}
                pictures={apartment.pictures}
                host={apartment.host}
                tags={apartment.tags}
                equipments={apartment.equipments}
                rating={apartment.rating}
            />
        </div>
        )
    };

export default Fiche;
