import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const routes = {
    "/": () => {
    return <Home/>
    },
    "/about": () => {
        return <About/>
    },
    "/contact": () => {
        return <Contact/>
    }
};

export default routes;