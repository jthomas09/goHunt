import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './components/search'

const Router = () => {
  return (
    <Switch>
      <Route component={Search} exact={true} path="/" />
    </Switch>
  );
};

export default Router;