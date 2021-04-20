import React from "react";
import fluoride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import whiting from '../../../images/whiting.png';
import ServiceDetails from "../ServiceDetails/ServiceDetails";


const servicesData =[
    {
        name: 'Fluoride TReatment',
        img:fluoride
    },
    {
        name: 'Cavity Filling ',
        img: cavity
    },
    {
        name: 'Teeth whiting',
        img: whiting
    }
]

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{color: '#1CC7C1'}}>Our Services</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
      <div className="w-75 row mt-5 pt-5">
        {
            servicesData.map(service=> <ServiceDetails service={service}></ServiceDetails>)
        }
      </div>
    </div>
    </section>
  );
};

export default Services;
