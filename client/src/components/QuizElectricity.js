import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';

class QuizElectricity extends Component {

  constructor() {
    super();
    let model = new QuizModel();
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
    }
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePlusMinus(event) {
    event.preventDefault();
    var incr = 1;
    if (event.target.className === 'minus bg-dark') {
        incr = -1;
    }
    var id = event.target.id;

    var tmp = Math.min(10, Math.max(0, incr + parseInt(this.state[id])));

    this.setState({ [id]: tmp });
    console.log("state: ", this.state);

    localStorage.setItem('quizData', JSON.stringify(this.state));
    console.log(localStorage.getItem('quizData'));
  }

  handleChange(event) {
  }

  componentDidMount() {
    let storageData = localStorage.getItem('quizData');

    if(storageData != null){
        this.setState({quizValues:JSON.parse(storageData)});
    }
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbFridge" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Fridges</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbCoffeeMaker" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="coffee" 
                value={this.state.nbCoffeeMaker}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbCoffeeMaker" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Coffee Makers</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbMicroWaveOven" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="microwave" 
                value={this.state.nbMicroWaveOven}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbMicroWaveOven" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Microwave Ovens</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbElectricOven" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="oven" 
                value={this.state.nbElectricOven}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbElectricOven" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Electric Oven</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbTv" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="tv" 
                value={this.state.nbTv}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbTv" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">TVs</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbGamingConsole" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="gaming" 
                value={this.state.nbGamingConsole}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbGamingConsole" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Gaming Consoles</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbDeskPC" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="deskpc" 
                value={this.state.nbDeskPC}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbDeskPC" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Desktop PCs</span>
        </div> 

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbLaptops" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="laptops" 
                value={this.state.nbLaptops}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbLaptops" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Laptops</span>
        </div>

        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbTumbleDryer" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="tumbledryers" 
                value={this.state.nbTumbleDryer}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbTumbleDryer" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Tumble Dryers</span>
        </div>
        <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbVacuumCleaner" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="vacuum" 
                value={this.state.nbVacuumCleaner}
                min="1"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbVacuumCleaner" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Vacuum Cleaners</span>
        </div>

      </div>


      </div>
    );
  }
}

export default QuizElectricity;