import React from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from '../pages/Dashboard/dashboard';
import SignIn from '../pages/SignIn/signIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastro" component={SignIn} />
  </Switch>
);

export default Routes;