import React, { Component } from 'react';
import ComparatorController from '../controller/comparatorController';

class Comparator extends Component {

  constructor() {
    super();
    this.state = {
      electricity: 0,
      water: 0,
      gas: 0
      
    }
    this.api = new ComparatorController();
  }

  componentDidMount() {
    this.setState({
      electricity: this.api.getElecConsEstimation(),
      water: this.api.getWaterConsEstimation(),
      gas: this.api.getGasConsEstimation()
    });
  
  }

    render() {
      return (
        <div className="container content">
        <h2 className="text-center">Comparator</h2>
        <hr />
        <div className="row-elec">
          Your average electricity consumption: {this.state.electricity}
        </div>
        <div>
          Your average water consumption: {this.state.water}
          </div>
        <div>
          Your average gas consumption: {this.state.gas}
          </div> 
        </div>
      );
    }
  }

  export default Comparator;
