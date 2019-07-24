import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ConsModel from '../model/ConsModel';

/**
 * My consumption class
 * Allows the user to input his values for water, gas and electricity consumption
 */

class MyConsumption extends Component {

    constructor() {
        super();
        let model = new ConsModel();
        this.state = {
            consValues: model.values,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.goToResults = this.goToResults.bind(this);
    }

    componentDidMount() {
        let storageData = localStorage.getItem('consData');

        if(storageData != null){
            this.setState({consValues:JSON.parse(storageData)});
        }

        console.log(this.state.consValues);
        
    }

    handleChange(event) {
        this.setState({consData: this.state.consValues[event.target.id] = parseInt(event.target.value)})
        localStorage.setItem('consData', JSON.stringify(this.state.consValues));
        console.log(this.state.consValues);
    }

    goToResults() {
        let consData = localStorage.getItem('consData');

        if(consData == null){
            this.setState({errorMessage:"all"})
        }else{
            let json = JSON.parse(consData);

            let hasEmptyValues = false;

            if(consData != null){
                for (var key in json) {
                    console.log(json[key]);
                    if(json[key] === ""){
                        hasEmptyValues = true;
                        this.setState({errorMessage:"hasEmpty"})
                        break;
                    }
                }
            }

            if(!hasEmptyValues){
                let path = `comparator`;
                this.props.history.push(path);
            }
        }

        
    }

    render() {

        const alertClasses="alert alert-warning";

        return (
            <div className="container content">
                <h2 className="text-center">My Consumption per year</h2>
                <hr />
                <div className={this.state.errorMessage == "" ? "hidden" : alertClasses} role="alert">Please enter a value for every question</div>

                <div className="row">
                <div key="elecCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-bolt fa-5x" style={{ color: "#8AB83D" }}></i>
                            <h5 className="card-title">Electricity</h5> <hr />
                            <div className="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="elecConsYearly" 
                                placeholder="4400"
                                onChange={this.handleChange} 
                                value={this.state.consValues.elecConsYearly}
                                min="100"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">kWh</div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                <div key="waterCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-tint fa-5x" style={{ color: "#8AB83D" }}></i>
                            <h5 className="card-title">Water</h5> <hr />
                            <div className="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="waterConsYearly" 
                                placeholder={80}
                                onChange={this.handleChange} 
                                value={this.state.consValues.waterConsYearly}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">m³</div>
                                </div>                             
                            </div>                        
                        </div>
                    </div>
                </div>

                <div key="gasCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-burn fa-5x" style={{ color: "#8AB83D" }}></i>
                            <h5 className="card-title">Gas</h5> <hr />
                            <div className="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="gasConsYearly"
                                placeholder={1300}
                                onChange={this.handleChange} 
                                value={this.state.consValues.gasConsYearly}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">m³</div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                </div>


                <div className="results_button row justify-content-center">
                    <div className="col-3">
                        <label htmlFor="zipCode" className="col-col-form-label">Your Zip Code</label>
                        <input 
                            type="number" 
                            className="center_placeholder form-control" 
                            id="zipCode" 
                            placeholder="1000"
                            onChange={this.handleChange}
                            value={this.state.consValues.zipCode}
                        />
                    </div>
                </div>

                <div className="results_button row justify-content-center">
                        <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={this.goToResults}>
                        Get my Results
                        </button>
                    
                </div>
            </div>
        );
    }
}

export default MyConsumption;
