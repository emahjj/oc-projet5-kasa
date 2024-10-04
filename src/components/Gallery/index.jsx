import React from 'react'
import './Gallery.scss'
import Card from '../Cards'
import apartmentsData from '../../data/Apartments.json'

function Gallery() {
    return (
        <div className="gallery">
            <div className='subgallery'>
            {apartmentsData.map((apartment) => (
                <Card key={apartment.id} id={apartment.id} picture={apartment.cover} title={apartment.title} />
                ))}
            </div>
        </div>
    )
}

export default Gallery;