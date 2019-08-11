import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Documentation from './components/Documentation'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/projects" component={Documentation} />
      </Switch>
    </div>
  );
};

export default App;