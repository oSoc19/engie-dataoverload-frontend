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
        let storageData = localStorage.getItem('basicData');

        if (storageData != null) {
            console.log(JSON.parse(storageData));
            this.setState({ quizValues: JSON.parse(storageData) });
        }

    }

    handleChange(event) {
        this.setState({ basicData: this.state.quizValues[event.target.id] = event.target.value })
        console.log(this.state.quizValues);
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    render() {
      return (
        <div className="container content">
          <h2 className="text-center">And finally something about gas</h2>
          <hr />
          <div className="row text-center">
            <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="additional-water">Is your house connected to natural gas?</label>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                      <label className="form-check-label" htmlFor="naturalGasConnection">Yes</label>
                  </div>
                  <div className="form-check">
                   <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                      <label className="form-check-label" htmlFor="naturalGasConnection">No</label>
                  </div>
              </div>

              <div className="form-group">
                <label htmlFor="peopleInHouse">How many times per week do you cook?</label>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">0 - 2</label>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">3 - 5</label>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">more than 5</label>
                  </div>
              </div>

              <div className="form-group">
                <label htmlFor="peopleInHouse">What type of cooking top do you have?</label>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">gas</label>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">electric</label>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" type="radio" name="blockRadioOptions" id="naturalGasConnection" value="naturalGasConnection" />
                     <label className="form-check-label" htmlFor="naturalGasConnection">induction</label>
                  </div>
              </div>
            </form>
          </div>
          </div>          
        </div>
      );
    }
}

export default QuizGas;