import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainPage } from "./pages/mainPage/MainPage";
import { WorkPage } from "./pages/workPage/WorkPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { ProjectPage } from "./pages/projectPage/ProjectPage";
import { NotFound } from "./pages/errorPages/NotFound";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import "./index.css";
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { mockData } from "./mockData/mockData";

// Font family imports
import "@fontsource/manrope";
import { Layout1 } from "./layouts/layout1/Layout1";

const App = () => {

    const router = createBrowserRouter([
        {
            element: <Layout1 />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "/work",
                    element: <WorkPage projects={mockData?.projects || []} pageDetails={mockData?.workPageDetails || {}}  />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/contact",
                    element: <ContactPage />,
                },
                {
                    path: "/project/:id",
                    element: <ProjectPage />,
                },
            ],
        },
    ]);
    return (
        <div className="root-wrapper">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
