import React from 'react'
import './Gallery.scss'
import Card from '../Cards'
import apartmentsData from '../../data/Apartments.json'

function Gallery() {
    return (
        <div className="gallery">
           {apartmentsData.map((apartment) => (
            <Card key={apartment.id} id={apartment.id} picture={apartment.cover} title={apartment.title} />
        ))}
        </div>
    )
}

export default Gallery;