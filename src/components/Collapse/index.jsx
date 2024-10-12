import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

function Collapse({header, description}) {
    const [openDescription, setOpenDescription] = useState(false);

    const arrowIcon = openDescription ? faChevronDown : faChevronUp;

    return (
        <div className="dropdown_block">
            <div className="dropdown_title"> 
                {header}
                <FontAwesomeIcon 
                    icon={arrowIcon} 
                    onClick={() => setOpenDescription(!openDescription)}
                />
            </div>
            {openDescription && (
            <div className="dropdown_description">{description}</div>
            )}
        </div>       
    )
}

export default Collapse;