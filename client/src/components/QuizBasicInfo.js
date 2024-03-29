import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';

/**
 * QuizBasicInfo class
 * First page of the quiz
 * Stores values in local storage
 */

class QuizBasicInfo extends Component {



    constructor() {
        super();

        let model = new QuizModel();
        this.state = {
            quizValues: model.values
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let storageData = localStorage.getItem('basicData');

        if (storageData != null) {
            this.setState({ quizValues: JSON.parse(storageData) });
        }

        window.$('[data-toggle="tooltip"]').tooltip();
    }

    handleChange(event) {
        this.setState({ basicData: this.state.quizValues[event.target.id] = event.target.value })
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    componentDidUpdate() {
        window.$('[data-toggle="tooltip"]').tooltip();
    }

    render() {
        return (
            <div className="container">
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
                                <label htmlFor="roomsInHouse">How many rooms are in your house? <i class="fas fa-question-circle" data-toggle="tooltip" data-placement="top" title="Including bathroom, kitchen, ..."></i></label>
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
                                <label htmlFor="preferredRoomTemp">What is your preferred house temperature? (°C in winter)</label>
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
                                <label htmlFor="houseInsulation">How well is your house insulated?</label>
                                <div className="form-check">
                                    <input className="form-check-input" checked={this.state.quizValues.houseInsulation == 1} onChange={this.handleChange} type="radio" name="inlineRadioOptions" id="houseInsulation" value="1" />
                                    <label className="form-check-label" htmlFor="insulation_low">Poorly</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" checked={this.state.quizValues.houseInsulation == 2} onChange={this.handleChange} type="radio" name="inlineRadioOptions" id="houseInsulation" value="2" />
                                    <label className="form-check-label" htmlFor="insulation_avg">Average</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" checked={this.state.quizValues.houseInsulation == 3} onChange={this.handleChange} type="radio" name="inlineRadioOptions" id="houseInsulation" value="3" />
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