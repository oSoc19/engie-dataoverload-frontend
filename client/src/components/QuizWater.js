import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';

/**
 * QuizWater class
 * Third page of the quiz
 * Stores answers values in local storage
 */

class QuizWater extends Component {
    constructor() {
        super();

        let model = new QuizModel();
        this.state = {
            quizValues: model.values
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGarden = this.handleGarden.bind(this);
        this.handlePool = this.handlePool.bind(this);
    }

    componentDidMount(){
        let storageData = localStorage.getItem('basicData');

        if(storageData != null){
            this.setState({quizValues:JSON.parse(storageData)});
        }
        
    }

    handleChange(event) {
        this.setState({basicData: this.state.quizValues[event.target.id] = event.target.value})
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    handleGarden(event){
        let value = (JSON.parse(localStorage.getItem('basicData'))).gardenWatering;
        
        if(value === "true"){
            value = "false";
        } else {
            value = "true";
        }
        
        this.setState({basicData: this.state.quizValues[event.target.id] = value})
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    handlePool(event){
        let value = (JSON.parse(localStorage.getItem('basicData'))).pool;
        
        if(value === "true"){
            value = "false";
        } else {
            value = "true";
        }
        
        this.setState({basicData: this.state.quizValues[event.target.id] = value})
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="showersPerWeek">How many showers are taken a week (per person)?</label>
                                <input 
                                    type="number"
                                    id="nbShowersPerWeek" 
                                    className="form-control" 
                                    placeholder="7" 
                                    onChange={this.handleChange} 
                                    value={this.state.quizValues.nbShowersPerWeek}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bathsPerWeek">And how many baths are taken a week?</label>
                                <input 
                                    type="number" 
                                    id="nbBathsPerWeek" 
                                    className="form-control" 
                                    placeholder="1" 
                                    onChange={this.handleChange}
                                    value={this.state.quizValues.nbBathsPerWeek}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="additional-water">Do you have any of the following?</label>
                                <div className="form-check">
                                  <input className="form-check-input" checked={this.state.quizValues.gardenWatering == "true"} onChange={this.handleGarden} type="checkbox" name="inlineCheckboxOptions" id="gardenWatering" value="true"/>
                                  <label className="form-check-label" htmlFor="gardenWatering">Garden that needs watering</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" checked={this.state.quizValues.pool == "true"} onChange={this.handlePool} type="checkbox" name="inlineCheckboxOptions" id="pool" value="true"/>
                                  <label className="form-check-label" htmlFor="pool">Pool</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizWater;