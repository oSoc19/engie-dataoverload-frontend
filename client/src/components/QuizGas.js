import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';

/**
 * QuizGas class
 * Last page of the quiz
 * Stores values in the local storage
 */
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
            this.setState({ quizValues: JSON.parse(storageData) });
        }

    }

    handleChange(event) {
        this.setState({ basicData: this.state.quizValues[event.target.id] = event.target.value })
        localStorage.setItem('basicData', JSON.stringify(this.state.quizValues));
    }

    render() {
      return (
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="natural-gas">Is your house connected to natural gas?</label>
                  <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="blockRadioGas" 
                        id="naturalGasConnection"
                        value={1}
                        onChange={this.handleChange}
                        checked={this.state.quizValues.naturalGasConnection == 1}
                      />
                      <label className="form-check-label" htmlFor="naturalGasConnection">Yes</label>
                  </div>
                  <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="blockRadioGas" 
                        id="naturalGasConnection"
                        value={0}
                        onChange={this.handleChange}
                        checked={this.state.quizValues.naturalGasConnection == 0}
                      />
                      <label className="form-check-label" htmlFor="naturalGasConnection">No</label>
                  </div>
              </div>

              <div className="form-group">
                <label htmlFor="peopleInHouse">How many times per week do you cook?</label>
                  <input 
                    type="number" 
                    id="nbCookingPerWeek" 
                    className="form-control" 
                    placeholder="4" 
                    onChange={this.handleChange}
                    value={this.state.quizValues.nbCookingPerWeek}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="peopleInHouse">What type of cooking top do you have?</label>
                  <div className="form-check">
                     <input 
                        className="form-check-input" 
                        type="radio" 
                        name="blockRadioTypeCooking" 
                        id="typeCooking" 
                        value="Gas"
                        onChange={this.handleChange}
                        checked={this.state.quizValues.typeCooking == "Gas"}
                      />
                     <label className="form-check-label" htmlFor="naturalGasConnection">Gas</label>
                  </div>
                  <div className="form-check">
                     <input 
                        className="form-check-input" 
                        type="radio" 
                        name="blockRadioTypeCooking" 
                        id="typeCooking" 
                        value="Electric"
                        onChange={this.handleChange}
                        checked={this.state.quizValues.typeCooking == "Electric"}
                      />
                     <label className="form-check-label" htmlFor="naturalGasConnection">Electric</label>
                  </div>
                  <div className="form-check">
                     <input 
                        className="form-check-input" 
                        type="radio" 
                        name="blockRadioTypeCooking" 
                        id="typeCooking" 
                        value="Induction"
                        onChange={this.handleChange}
                        checked={this.state.quizValues.typeCooking == "Induction"}
                      />
                     <label className="form-check-label" htmlFor="naturalGasConnection">Induction</label>
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