import React from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from '../pages/Dashboard/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;