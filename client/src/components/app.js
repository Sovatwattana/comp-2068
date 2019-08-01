import React from "react";
import Routes from "./routes";


import MainNav from "./partials/main_nav";

export default function App (){
    return (
        <div className="App">
           <Routes />
           <MainNav />
        </div>
    );
}