import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ConsModel from '../model/ConsModel';


class MyConsumption extends Component {

    constructor() {
        super();
        let model = new ConsModel();
        this.state = {
            consValues: model.values
        }
        this.handleChange = this.handleChange.bind(this);
        this.goToResults = this.goToResults.bind(this);
    }

    componentDidMount() {
        let storageData = localStorage.getItem('consData');

        if(storageData != null){
            this.setState({consValues:JSON.parse(storageData)});
        }
    }

    handleChange(event) {
        this.setState({consData: this.state.consValues[event.target.id] = parseInt(event.target.value)})
        localStorage.setItem('consData', JSON.stringify(this.state.consValues));
        console.log(this.state.consValues);
    }

    goToResults() {
        console.log(this.state.consValues);
        let path = `comparator`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">My Consumption per year</h2>
                <hr />
                <div className="row">

                <div key="elecCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-bolt fa-5x" style={{ color: "#FFD700" }}></i>
                            <h5 className="card-title">Electricity</h5> <hr />
                            <div class="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="elecConsYearly" 
                                placeholder="3000"
                                onChange={this.handleChange} 
                                value={this.state.consValues.elecConsYearly}
                                min="100"
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">kWh</div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                <div key="waterCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-tint fa-5x" style={{ color: "#005fe3" }}></i>
                            <h5 className="card-title">Water</h5> <hr />
                            <div class="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="waterConsYearly" 
                                placeholder={123}
                                onChange={this.handleChange} 
                                value={this.state.consValues.waterConsYearly}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">m³</div>
                                </div>                             
                            </div>                        
                        </div>
                    </div>
                </div>

                <div key="gasCons" className="col-md-4 center">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-burn fa-5x" style={{ color: "#B22222" }}></i>
                            <h5 className="card-title">Gas</h5> <hr />
                            <div class="input-group mb-2 mr-sm-2">
                                <input 
                                type="number" 
                                className="center_placeholder form-control" 
                                id="gasConsYearly"
                                placeholder={750}
                                onChange={this.handleChange} 
                                value={this.state.consValues.gasConsYearly}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">m³</div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                </div>


                <div className="results_button row justify-content-center">
                    <div className="col-3">
                        <label for="zipCode" className="col-col-form-label">Your Zip Code</label>
                        <input 
                            type="number" 
                            className="center_placeholder form-control" 
                            id="zipCode" 
                            placeholder="4321"
                            onChange={this.handleChange}
                            value={this.state.consValues.zipCode}
                        />
                    </div>
                </div>

                <div className="results_button row justify-content-center">
                    <div className="col-3">
                        <button 
                        type="button" 
                        className="btn btn-success" 
                        onClick={this.goToResults}>
                        Get my Results
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyConsumption;