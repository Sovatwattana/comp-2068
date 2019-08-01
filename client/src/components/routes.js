import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import BlogNew from "./blogs/new";
import BlogIndex from "./blogs/index";
import BlogShow from "./blogs/show";
import BlogEdit from "./blogs/edit";
import BlogDestroy from "./blogs/destroy";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes()  {
 return(
     <Switch>
         <Route exact path ="/" component ={Home}/>
         <Route exact path ="/about" component ={About}/>
         <Route exact path ="/contact" component ={Contact}/>
         <Route exact path ="/blogs/new" component ={BlogNew}/>
         <Route exact path ="/blogs" component ={BlogIndex}/>
         <Route exact path ="/blogs/:id" component={BlogShow}/>
         <Route exact path ="/blogs/:id/edit" component ={BlogEdit}/>
         <Route exact path ="/blogs/:id/destroy" component ={BlogDestroy}/>
         <Route exact path ="/register" component ={Register}/>
         <Route exact path ="/login" component ={Login}/>
         <Route exact path ="/logout" component ={Logout}/>
    
     </Switch>
 );

}

export default Routes;
