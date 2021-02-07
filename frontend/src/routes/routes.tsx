import React from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from '../pages/Dashboard/dashboard';
import SignIn from '../pages/SignIn/signIn';
import EditUser from '../pages/EditUser/editUser';
import ShowUser from '../pages/ShowUser/showUser';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastro" component={SignIn} />
    <Route path="/edit/:id" component={EditUser} />
    <Route path="/show/:id" component={ShowUser} />
  </Switch>
);

export default Routes;