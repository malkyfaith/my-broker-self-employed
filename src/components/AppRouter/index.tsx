import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import TokenDisplay from '../TokenDisplay';
import Login from '../Login';
import __TestingGround from '../__TestingGround';
import __TestingGroundForAccountant from '../__TestingGround/accountant-test';

const AppRouter: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename={process.env.ROUTE_PATH}>
      <Switch>
        <ProtectedRoute exact path="/" component={TokenDisplay} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/testing" component={__TestingGround} />
        <Route path="/test-accountant" component={__TestingGroundForAccountant} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
