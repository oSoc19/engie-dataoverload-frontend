import React, { Component } from 'react';

class QuizElectricity extends Component {

  constructor() {
    super();
    this.state = {
        nbDishwasher: 1,
        nbFridge: 1,
        nbCoffeeMaker: 1,
        nbMicroWaveOven: 1,
        nbElectricOven: 1,
        nbTv: 1,
        nbGamingConsole: 1,
        nbLaptops: 1,
        nbDeskPC: 1,
        nbWashingMachine: 1,
        nbTumbleDryer: 1,
        nbVacuumCleaner: 1,
        nbHairDryer: 1,
    }

    this.handlePlusMinus = this.handlePlusMinus.bind(this);
  }

  handlePlusMinus(event) {
    event.preventDefault();
    var incr = 1;
    if (event.target.className === 'minus bg-dark') {
        incr = -1;
    }
    var id = event.target.id;
    console.log(id);
    console.log(this.state[id]);
    var tmp = Math.min(10, Math.max(0, incr + parseInt(this.state[id])));
    console.log(tmp);
    console.log("pre ", this.state);
    this.setState({ [id]: tmp });
    console.log("post ", this.state);
  }
    
  render() {
    return (
      <div className="container content">
      <h2 className="text-center">Devices consuming electricy</h2>
      <hr />
    <div className="row elec_devices" >
        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbDishwasher" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="qty" 
                value={this.state.nbDishwasher}
                min="1"
                max="10"
                //value={this.state.quizValues.familySize}
            />
            <span className="plus bg-dark" id="nbDishwasher" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Dishwashers</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbFridge" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="computer" 
                value={this.state.nbFridge}
                min="1"
                max="10"
                //value={this.state.quizValues.familySize}
            />
            <span className="plus bg-dark" id="nbFridge" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">TV screens</span>
        </div>

      </div>


      </div>
    );
  }
}

export default QuizElectricity;