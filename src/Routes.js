import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from './Login'

const Routes = () => (
    <Switch>
        <Route path="/Login" component={Login}/>
        {/*<Route path="/sap-projects" component={SapProjectRoutes}/>*/}
        <Redirect from='/' to='sap-projects'/>
    </Switch>
);

export default Routes;