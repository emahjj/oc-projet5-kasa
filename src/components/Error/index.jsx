import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom'
import Error404 from '../../assets/404.svg'

function Error() {
    return (
        <div className="error">
            <img src={Error404} alt="Error 404" className="error__img" />
            <h1 className="error__message">Oups! La page que vous demandez n'existe pas.</h1>
            <Link className="error__link" to="/accueil">Retourner sur la page d’accueil</Link>
        </div>
    )   
}
 
export default Error;