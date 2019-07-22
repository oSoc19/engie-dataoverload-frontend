import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
        this.checkFilled = this.checkFilled.bind(this);
        this.goToResults = this.goToResults.bind(this);
    }

    handleNext(e) {
        e.preventDefault();

        let newNr = this.state.quizNr;
        ++newNr;
                
        if(newNr < this.components.length){
            this.setState({quizNr: newNr})
        }

        if(newNr === this.components.length){
            if (this.checkFilled()) {
                this.goToResults();
            } else {
                console.log("ADD all values");
            }
        }
    }

    checkFilled() {
        let allfilled = true;

        let elecStorageData = localStorage.getItem('elecData');
        let elecjson = JSON.parse(elecStorageData);
        if (elecStorageData === null) {
            allfilled = false;
        }
        console.log("ELEC JSON: ", elecjson);
        if(elecStorageData != null){
            for (var key in elecjson) {
                if (elecjson[key] === null || elecjson[key] === "") {
                    allfilled = false;
                    console.log(key);
                    console.log(elecjson[key]);
                    console.log("[PLEASE ADD VALUE HERE]");
                }
            }
        }

        let basicStorageData = localStorage.getItem('basicData');
        let basicjson = JSON.parse(basicStorageData);
        if (basicStorageData === null) {
            allfilled = false;
        }
        console.log("BASIC JSON: ", basicjson);
        if(basicStorageData != null){
            for (var key in basicjson) {
                if (basicjson[key] === null || basicjson[key] === "") {
                    allfilled = false;
                    console.log(key);
                    console.log(basicjson[key]);
                    console.log("[PLEASE ADD VALUE HERE]");
                }
            }
        }
        return allfilled;
    }

    goToResults() {
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
            <div className="main-background">
                <div className="top-whitespace"></div>

                <div className="container white-box">
                    <div className="quiz-scrollable">
                        <TagName />
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <a className="quiz-btn" onClick={this.handlePrevious}><i class="fas fa-arrow-left"></i></a>
                        </div>
                        <div className="col-md-6">
                            <a className="quiz-btn" onClick={this.handleNext}><i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Quiz;