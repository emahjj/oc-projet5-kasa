import React from "react";
import './Descriptif.scss'
import StarRating from "../Star";
import Carousel from "../Carousel";

function Descriptif({title, location, pictures, host, tags, description, equipments, rating}) {
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



            <div className="dropdowns">
                <div className="dropdown_block">
                    <div className="dropdown_open">Description</div>
                    <div>{description}</div>
                </div>
                
                <div className="dropdown_block">
                    <div className="dropdown_open">Équipements</div>
                    <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                    </ul>`
                </div>
            </div>

        </div>
    );
}

export default Descriptif;