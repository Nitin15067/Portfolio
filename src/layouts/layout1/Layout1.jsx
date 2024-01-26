import PropTypes from "prop-types";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import "./style.css";

export const Layout1 = () => { 
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="layout-inner-wrapper">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

Layout1.propTypes = {};
