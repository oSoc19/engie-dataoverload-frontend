import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';
class QuizWater extends Component {
    constructor() {
        super();

        let model = new QuizModel();
        this.state = {
            quizValues: model.values
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let storageData = localStorage.getItem('quizData');

        if(storageData != null){
            console.log(JSON.parse(storageData));
            this.setState({quizValues:JSON.parse(storageData)});
        }
        
    }

    handleChange(event) {
        this.setState({quizData: this.state.quizValues[event.target.id] = event.target.value})
        console.log(this.state.quizValues);
        localStorage.setItem('quizData', JSON.stringify(this.state.quizValues));
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Some questions about your water habits</h2>
                <hr />
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="showersPerWeek">How many showers per person in one week?</label>
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
                                <label htmlFor="bathsPerWeek">And how many baths in one week?</label>
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
                                  <input className="form-check-input" type="checkbox" name="inlineCheckboxOptions" id="gardenWatering" value="gardenWatering"/>
                                  <label className="form-check-label" htmlFor="gardenWatering">Garden that needs watering</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" name="inlineCheckboxOptions" id="pool" value="pool"/>
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