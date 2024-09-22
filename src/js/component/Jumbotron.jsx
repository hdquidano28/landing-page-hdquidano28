import React from "react";

export const Jumbotron = () => {
    return (
        <>
        <div className="container-fluid px-4 py-4">
            <div className="custom-gray p-5 bg-body-tertiary rounded-1">
                <div className="container">
                    <h1 className="display-1">A Warm Welcome!</h1>
                    <p className="col-md fs-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae aut voluptates provident repellat, asperiores commodi rem beatae cumque, porro tenetur maiores atque nisi sunt cupiditate id minima accusamus laboriosam.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button" role="button">
                        Call to action!
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};