import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import DisplayCard from "../../components/displayCard/DisplayCard";
import defaultCardImage from "../../assets/defaultCard.png";

export const WorkPage = (props) => {
    const { projects, pageDetails } = props;

    const processProjectInfo = (projectInfo) => {
        return {
            imageUrl: projectInfo?.displayImage || defaultCardImage,
            title: projectInfo?.title || "",
            subTitle: projectInfo?.subTitle || "subtitle",
        };
    }
    
    if(!projects?.length) {
        return <>No Projects found...</>
    }

    return (
        <div className="page-wrapper">
            <div className="hero-section">
                <div className="container">
                    <div className="title">{pageDetails?.title}</div>
                    <div className="description">
                        {pageDetails?.description?.map((desc, index) => {
                            return <span key={index} style={{color: desc?.color}}>{desc.text}</span>
                        })}
                    </div>
                </div>
            </div>
            <div className="project-list-wrapper">
                {projects?.map((project, index) => {
                    const cardInfo = processProjectInfo(project);
                    return <div key={index}>
                        <DisplayCard cardInfo={cardInfo} />
                    </div>
                })}
            </div>
        </div>
    );
};

WorkPage.propTypes = {
    projects: PropTypes.array,
    pageDetails: PropTypes.object
};
