import React from "react";
import "./style.css";

const DisplayCard = (props) => {
    console.log(props);
    const {imageUrl = "", title = "", subTitle = ""} = (props?.cardInfo) || {};
    return (
        <div className="card-wrapper">
            <div className="image-container">
                <img src={imageUrl} className="image" />
            </div>
            <div className="card-content">
                <div className="title">{title}</div>
                <div className="subtitle">{subTitle}</div>
            </div>
        </div>
    );
};

export default DisplayCard;
