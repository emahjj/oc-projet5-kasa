import './Gallery.scss'
import Card from '../Cards'
import apartmentsData from '../../data/Apartments.json'

function Gallery() {
    return (
        <div className="gallery">
           {apartmentsData.map((apartment, index) => (
            <Card key={index} picture={apartment.picture} title={apartment.title} />
        ))}
        </div>
    )
}

export default Gallery;