import React from "react";
import './Descriptif.scss'
import StarRating from "../Star";
import Carousel from "../Carousel";
import Collapse from "../Collapse";

function Descriptif({title, location, pictures, host, tags, rating, header, description, equipments}) {
    return (
        <div className="apartment_description">

        <Carousel pictures={pictures} />

            <div className="description_frame">
                <div className="description_header">
                    <h2 className="name">{title}</h2>
                    <p>{location}</p>
                    <div className="filters">
                        {tags.map((tag, index) => (
                        <div key={index} className="filter_tag">{tag}</div>
                        ))}
                    </div>
                </div>


                <div className="description_reviews">
                    <div className="host">
                        <div className="host_name">{host.name}</div>
                        <img className="host_picture" src={host.picture} alt={host.name} />           
                    </div>
                    <div id="starRating">
                        <StarRating rating={rating}/>
                    </div>
                </div>
            </div>
            
            <div className="dropdowns_fiche">
                <Collapse header={"Description"} description={description}/>
                <Collapse header={"Équipements"} description={equipments}/>
            </div>  
        </div>
    );
}

export default Descriptif;