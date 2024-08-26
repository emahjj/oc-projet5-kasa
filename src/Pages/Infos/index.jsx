import React from 'react';
import './Infos.scss';
import Collapse from '../../components/Collapse';

function Information() {
    return (
        <div>
            <div className="home">
                <div className="title2"></div>
            </div>

            <div className="dropdowns_apropos">
                <Collapse header={"Fiabilité"} description={"Les annonces postées sur kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulèrement vérifiées par nos équipes."} />
                <Collapse header={"Respect"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entrainera une exclusion de notre plateforme."} />
                <Collapse header={"Service"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entrainera une exclusion de notre plateforme."} />
                <Collapse header={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à notre équipe de vérifier les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
            </div>
        </div>
    )
};

export default Information;
