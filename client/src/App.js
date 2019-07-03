import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Info from './components/info';
import SolarImpact from './components/solarImpact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/info'} className="nav-link">Info</Link></li>
              <li><Link to={'/solar'} className="nav-link">Solar Impact</Link></li>
            </ul>
          </nav>
          <hr />
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/info' component={Info} />
            <Route path='/solar' component={SolarImpact} />
          </Switch>

          
        </div>


        
      </Router>

      
    );
  }
}

export default App;