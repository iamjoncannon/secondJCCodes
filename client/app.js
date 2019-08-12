import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Documentation from './components/Documentation'
import AboutMe from './components/AboutMe'
import ProjectLanding from './components/Project/ProjectLanding'
import Technology from './components/technologies/TechLanding'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/projects" component={ProjectLanding} />
        <Route path="/technology" component={Technology} />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
    </div>
  );
};

export default App;