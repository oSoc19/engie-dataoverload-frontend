import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import QuizBasicInfo from './QuizBasicInfo';
import QuizElectricity from './QuizElectricity';
import QuizWater from './QuizWater';
import QuizGas from './QuizGas';

class Quiz extends Component {

    components = [QuizGas, QuizBasicInfo, QuizElectricity, QuizWater];

    constructor() {
        super();
        this.state = {
            quizNr: 0
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.goToResults = this.goToResults.bind(this);
    }

    handleNext(e) {
        e.preventDefault();
        
        let newNr = this.state.quizNr;
        ++newNr;
                
        if(newNr < this.components.length){
            console.log(newNr);
            this.setState({quizNr: newNr})
        }

        if(newNr === this.components.length){
            console.log("last next");
            this.goToResults();
        }
    }

    goToResults() {
        console.log(this.state.consValues);
        let path = `comparator`;
        this.props.history.push(path);
    }    

    handlePrevious(e) {
        e.preventDefault();
        if(this.state.quizNr > 0)
            this.setState({quizNr: --this.state.quizNr})
    }        

    render() {

        const TagName = this.components[this.state.quizNr];

        return (
            <div className="container content">
                <TagName />
                <div className="row text-center">
                    <div className="col-md-6">
                        <a className="btn btn-primary" onClick={this.handlePrevious}>Previous</a>
                    </div>
                    <div className="col-md-6">
                        <a className="btn btn-primary" onClick={this.handleNext}>Next</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;