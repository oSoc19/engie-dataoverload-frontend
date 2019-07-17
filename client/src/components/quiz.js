import React, { Component } from 'react';
import QuizBasicInfo from './QuizBasicInfo';
import QuizElectricity from './QuizElectricity';
import QuizWater from './QuizWater';
import QuizGas from './QuizGas';

class Quiz extends Component {

    components = [QuizBasicInfo, QuizElectricity, QuizWater, QuizGas];

    constructor() {
        super();
        this.state = {
            quizNr: 0
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
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
        }
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