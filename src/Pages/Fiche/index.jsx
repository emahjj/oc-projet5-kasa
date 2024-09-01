import React from 'react';
import { useParams } from 'react-router-dom';
import './Fiche.scss';
import apartmentsData from '../../data/Apartments.json';
import Descriptif from '../../components/Descriptif';
import Error from '../../components/Error';

function Fiche() {
    const { id } = useParams(); 
    const apartment = apartmentsData.find(apartment => apartment.id === id); 

    let equipmentstring = (
        <ul>
            {apartment.equipments.map((equipment, index) => (
                <li key={id}>{equipment}</li>
            ))}
        </ul>
    )
  
    if (!apartment) {
      return <Error/>; 
    }

  return (
        <div className="">
            <Descriptif
                key={apartment.id} 
                title={apartment.title}
                description={apartment.description}
                location={apartment.location}
                pictures={apartment.pictures}
                host={apartment.host}
                tags={apartment.tags}
                equipments={equipmentstring}
                rating={apartment.rating}
            />
        </div>
        )
    };

export default Fiche;
