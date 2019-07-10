import React, { Component } from 'react';
import ComparatorController from '../controller/comparatorController';

class Comparator extends Component {

  constructor() {
    super();
    this.state = {
      results: 0
    }
    this.api = new ComparatorController();
  }

  componentDidMount() {
    this.setState({results: this.api.getResults()});
  
  }

    render() {
      return (
        <div className="container content">
        <h2 className="text-center">Comparator</h2>
        <hr />
        <div className="row">
        {this.state.results}
        </div>
        </div>
      );
    }
  }

  export default Comparator;
