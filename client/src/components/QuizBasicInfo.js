import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';
class QuizBasicInfo extends Component {

    

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
            <div className="container content">
                <h2 className="text-center">Let's begin with some basic information</h2>
                <hr />
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="peopleInHouse">How many people live in your house?</label>
                                <input 
                                    type="number"
                                    id="familySize" 
                                    className="form-control" 
                                    placeholder="3" 
                                    onChange={this.handleChange} 
                                    value={this.state.quizValues.familySize}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="roomsInHouse">How many rooms are in your house?</label>
                                <input 
                                    type="number" 
                                    id="nbRooms" 
                                    className="form-control" 
                                    placeholder="4" 
                                    onChange={this.handleChange}
                                    value={this.state.quizValues.nbRooms}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="zipCode">What is your zip code?</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="zipCode" 
                                    placeholder="4000" 
                                    onChange={this.handleChange}
                                    value={this.state.quizValues.zipCode}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="preferredRoomTemp">What is your preferred room temperature? (°C)</label>
                                <input 
                                    type="number" 
                                    id="prefRoomTemp" 
                                    className="form-control" 
                                    placeholder="21 °C" 
                                    onChange={this.handleChange}
                                    value={this.state.quizValues.prefRoomTemp}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="preferredRoomTemp">How well is your house insulated?</label>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="insulation_low" value="insulation_low"/>
                                  <label className="form-check-label" htmlFor="insulation_low">Poorly</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="inlineRadioOptionss" id="insulation_avg" value="insulation_avg"/>
                                  <label className="form-check-label" htmlFor="insulation_avg">Average</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="inlineRadioOptionss" id="insulation_well" value="insulation_well"/>
                                  <label className="form-check-label" htmlFor="insulation_well">Well</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizBasicInfo;