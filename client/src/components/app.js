import React from "react";
import {useRoutes} from "hookrouter";
import routes from "./router";

import MainNav from "./partials/main_nav";

export default function App (){
    const routeResult = useRoutes(routes);

    return (
        <div className="App">
            <MainNav />
            {routeResult}
        </div>
    );
}