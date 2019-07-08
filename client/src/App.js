import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Info from './components/info';
import SolarImpact from './components/solarImpact';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">Insight the <i>boxx</i></a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li><Link to={'/'} className="nav-link"> Home </Link></li>
                  <li><Link to={'/info'} className="nav-link">Fun Facts</Link></li>
                  <li><Link to={'/solar'} className="nav-link">Solar Impact</Link></li>
                  <li><Link to={'/about'} className="nav-link">About</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/info' component={Info} />
            <Route path='/solar' component={SolarImpact} />
            <Route path='/about' component={About} />
          </Switch>
        </div>



      </Router>


    );
  }
}

export default App;