import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img style={{width: '60px'}} className="mx-3" src={img} alt=""/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-o">
                        {from}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;