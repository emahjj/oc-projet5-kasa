import React from "react";
import './Descriptif.scss'
import StarRating from "../Star";

function Descriptif({title, location, pictures, host, tags, description, equipments, rating}) {
    return (
        <div className="fichelogement">


        <div className="carousel">
                <div className="carousel__arrow carousel__arrow--left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                </div>
                <div className="carousel__content">
                {pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Slide ${index + 1}`} />
                ))}
                </div>
                <div className="carousel__arrow carousel__arrow--right">   
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                    </svg>
                </div>
        </div>

            <div className="header_title">
                <div className="apartment_description">
                    <h2 className="apartment_name">{title}</h2>
                    
                </div>

                <div className="host">
                    <div className="host_name">{host.name}</div>
                    <img className="host_picture" src={host.picture} alt={host.name} />
                </div>
               
            </div>

            <div className="header_subtitle">
                <div className="location">{location}</div>
                <div id="starRating">
                    <StarRating rating={rating}/>
                </div>
            </div>
            
            <div className="filter_tags">
                {tags.map((tag, index) => (
                <div key={index} className="filter_tag">{tag}</div>
                ))}
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