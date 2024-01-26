import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import Logo from "../../assets/pearl.png";
import arrowIcon from "../../assets/arrow1.png";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header-wrapper">
            <img
                className="logo"
                alt="Logo"
                onClick={() => navigate("/")}
                src={Logo}
            />
            <div className="navbar">
                <div className="nav-item">
                    <h4>
                        <Link to="/work">Work</Link>
                    </h4>
                </div>
                <div className="div-wrapper">
                    <h4>
                        <Link to="/about">About</Link>
                    </h4>
                </div>
                <div className="div-wrapper">
                    <h4>
                        <Link to="/contact">Contact</Link>
                    </h4>
                </div>
            </div>
            <button className="CTA">
                <button className="btn">
                    <div className="div">
                        <div className="text-wrapper-2">Let’s Talk</div>
                        <img className="SVG" alt="Svg" src={arrowIcon} />
                    </div>
                </button>
            </button>
        </div>
    );
};

Header.propTypes = {};
