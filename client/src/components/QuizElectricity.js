import React, { Component } from 'react';
import ElecDeviceModel from '../model/ElecDeviceModel';

class QuizElectricity extends Component {

  constructor() {
    super();
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
        nbVacuumCleaner: 0
    }
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePlusMinus(event) {
    event.preventDefault();
    
    var id = event.target.id;

    this.setState({ [id]: ++this.state[id] });

    localStorage.setItem('elecData', JSON.stringify(this.state));
  }

  handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        localStorage.setItem('elecData', JSON.stringify(this.state));
  }

  componentDidMount() {
    let storageData = localStorage.getItem('elecData');

    let json = JSON.parse(storageData);

    if(storageData != null){
        for (var key in json) {
            console.log(key);
            console.log(json[key]);
            
            this.setState({[key]: json[key]});
        }
    }
    console.log(this.state);
    
  }
    
  render() {
    return (
      <div className="container">
      <h2 className="text-center">Devices consuming electricity</h2>
      <hr />
        <div className="row elec_devices" >
            <div className="qty col-md-4">
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
            <p className="device_name">Dishwashers</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Fridges</p>
            </div>

            <div className="qty col-md-4">
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
            <p className="device_name">Washing Machine</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Coffee Makers</p>
            </div>
    
            <div className="qty col-md-4">
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
<<<<<<< HEAD
            <span className="plus bg-dark" id="nbMicroWaveOven" o1nClick={this.handlePlusMinus}>+</span>
            <span className="device_name">Microwave Ovens</span>
=======
            <span className="plus bg-dark" id="nbMicroWaveOven" onClick={this.handlePlusMinus}>+</span>
            <p className="device_name">Microwave Ovens</p>
>>>>>>> 6dc03a107fd770e9f6f5d3b26b5782577a073570
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Electric Oven</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">TVs</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Gaming Consoles</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Desktop PCs</p>
            </div> 
    
            <div className="qty col-md-4">
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
            <p className="device_name">Laptops</p>
            </div>
    
            <div className="qty col-md-4">
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
            <p className="device_name">Tumble Dryers</p>
            </div>

            <div className="qty col-md-4">
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
            <p className="device_name">Vacuum Cleaners</p>
            </div>

        </div>
      </div>
    )}
    
}

export default QuizElectricity;
