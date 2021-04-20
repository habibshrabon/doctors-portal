import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../../images/doctor-sm.png';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Coudi</h4>
            <h6> <FontAwesomeIcon  className="text-primary" icon={faPhoneAlt}/>+088-01712390890</h6>
            
        </div>
    );
};

export default Doctor;