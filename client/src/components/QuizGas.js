import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';
class QuizGas extends Component {
    constructor() {
        super();

        let model = new QuizModel();
        this.state = {
            quizValues: model.values
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let storageData = localStorage.getItem('quizData');

        if (storageData != null) {
            console.log(JSON.parse(storageData));
            this.setState({ quizValues: JSON.parse(storageData) });
        }

    }

    handleChange(event) {
        this.setState({ quizData: this.state.quizValues[event.target.id] = event.target.value })
        console.log(this.state.quizValues);
        localStorage.setItem('quizData', JSON.stringify(this.state.quizValues));
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">And finally something about gas</h2>
                <hr />
                <div className="form-group">
                <label htmlFor="additional-water">Is your house connected to natural gas?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                        <label className="form-check-label" htmlFor="naturalGasConnection">Yes</label>
                        <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                        <label className="form-check-label" htmlFor="naturalGasConnection">No</label>
                    </div>
                </div>

                
            </div>

        );
    }
}

export default QuizGas;