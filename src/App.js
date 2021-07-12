import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './containers/history';
import SolutionPage from './components/HomeSolutionPage';
import IAQaudit from './components/IAQcheckout/checkout/userFormDetails';
import Success from './components/IAQcheckout/success/Success';
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SolutionPage} />
        <Route path="/IAQ-audit-home" component={IAQaudit} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
