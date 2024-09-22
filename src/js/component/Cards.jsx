import React from "react";
import PropTypes from "prop-types";


export const Card = ({ title, rigoImage, description, buttonLabel }) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card mt-4">
                    <img src={rigoImage} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>    
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">{buttonLabel}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    rigoImage: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
}

