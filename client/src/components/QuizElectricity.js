import React, { Component } from 'react';
import ElecDeviceModel from '../model/ElecDeviceModel';

class QuizElectricity extends Component {

  constructor() {
    super();
    let model = new ElecDeviceModel();
    this.state = {
        nbDishwasher: 0,
        nbFridge: 0,
        nbCoffeeMaker: 0,
        nbMicroWaveOven: 0,
        nbElectricOven: 0,
        nbTv: 0,
        nbGamingConsole: 0,
        nbLaptops: 0,
        nbDeskPC: 0,
        nbWashingMachine: 0,
        nbTumbleDryer: 0,
        nbVacuumCleaner: 0,
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

    //localStorage.setItem('item before', this.state[id]);
    this.setState({ [id]: tmp });

    //FOR DEBUGGING TO BE DELETED AFTERWARDS, NOT FIXED YET THO
    // localStorage.setItem('tmp', tmp);
    // localStorage.setItem('id', id);
    
    // localStorage.setItem('item now', this.state[id]);

    localStorage.setItem('elecData', JSON.stringify(this.state));
  }

  handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        localStorage.setItem('elecData', JSON.stringify(this.state));
  }

  componentDidMount() {
    let storageData = localStorage.getItem('elecData');

    if(storageData != null){
        this.setState({quizValues:JSON.parse(storageData)});
    }
  }
    
  render() {
    return (
      <div className="container">
      <h2 className="text-center">Devices consuming electricity</h2>
      <hr />
        <div className="row elec_devices" >
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbDishwasher" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly
                className="count" 
                name="qty" 
                value={this.state.nbDishwasher}
                min="0"
                max="10"
            />
            <span className="plus bg-dark" id="nbDishwasher" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Dishwashers</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbFridge" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="computer" 
                value={this.state.nbFridge}
                min="0"
                max="10"
            />
            <span className="plus bg-dark" id="nbFridge" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Fridges</span>
            </div>

            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbWashingMachine" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                className="count" 
                name="washingMachine" 
                value={this.state.nbWashingMachine}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbWashingMachine" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Washing Machine</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbCoffeeMaker" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="coffee" 
                value={this.state.nbCoffeeMaker}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbCoffeeMaker" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Coffee Makers</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbMicroWaveOven" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="microwave" 
                value={this.state.nbMicroWaveOven}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbMicroWaveOven" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Microwave Ovens</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbElectricOven" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="oven" 
                value={this.state.nbElectricOven}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbElectricOven" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Electric Oven</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbTv" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="tv" 
                value={this.state.nbTv}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbTv" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">TVs</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbGamingConsole" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="gaming" 
                value={this.state.nbGamingConsole}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbGamingConsole" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Gaming Consoles</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbDeskPC" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="deskpc" 
                value={this.state.nbDeskPC}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbDeskPC" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Desktop PCs</span>
            </div> 
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbLaptops" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="laptops" 
                value={this.state.nbLaptops}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbLaptops" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Laptops</span>
            </div>
    
            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbTumbleDryer" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="tumbledryers" 
                value={this.state.nbTumbleDryer}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbTumbleDryer" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Tumble Dryers</span>
            </div>

            <div className="qty col-md-6">
            <span className="minus bg-dark" id="nbVacuumCleaner" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" readonly 
                className="count" 
                name="vacuum" 
                value={this.state.nbVacuumCleaner}
                min="0"
                max="10"
                onChange={this.handleChange}
            />
            <span className="plus bg-dark" id="nbVacuumCleaner" onClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Vacuum Cleaners</span>
            </div>

        </div>
      </div>
    )}
    
}

export default QuizElectricity;
