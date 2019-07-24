import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import QuizBasicInfo from './QuizBasicInfo';
import QuizElectricity from './QuizElectricity';
import QuizWater from './QuizWater';
import QuizGas from './QuizGas';

/**
 * Quiz class
 * Handles the quiz pages and state
 */

class Quiz extends Component {

    components = [QuizBasicInfo, QuizElectricity, QuizWater, QuizGas];

    constructor() {
        super();

        this.state = {
            quizNr: 0,
            errorMessage:""
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.checkFilled = this.checkFilled.bind(this);
        this.goToResults = this.goToResults.bind(this);
        localStorage.removeItem('consData');
    }

    handleNext(e) {
        e.preventDefault();
        this.setState({errorMessage:""});
        let newNr = this.state.quizNr;
        ++newNr;
                
        if(newNr < this.components.length){
            this.setState({quizNr: newNr})
        }

        if(newNr === this.components.length){
            if (this.checkFilled()) {
                this.goToResults();
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

        if(elecStorageData != null){
            for (var key in elecjson) {
                if (elecjson[key] === null || elecjson[key] === "") {
                    allfilled = false;
                    this.setState({errorMessage:key})
                    console.log(key);
                }
            }
        }

        let basicStorageData = localStorage.getItem('basicData');
        let basicjson = JSON.parse(basicStorageData);
        if (basicStorageData === null) {
            allfilled = false;
            this.setState({errorMessage:"all"})
            this.setState({quizNr: 0})
            //please fill lmfjsfdj all
        }

        if(basicStorageData != null){
            for (var key in basicjson) {
                if (basicjson[key] === null || basicjson[key] === "") {
                    allfilled = false;
                    this.setState({errorMessage:key})
                    this.setState({quizNr: 0})
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

    componentWillMount(){
        console.log(localStorage.getItem("basicData"));
        
        if(localStorage.getItem("basicData") == "null")
            localStorage.removeItem("basicData");

        if(localStorage.getItem("elecData") == "null")
            localStorage.removeItem("basicData");
    }

    render() {

        const TagName = this.components[this.state.quizNr];
        const alertClasses="alert alert-warning";

        return (
            <div className="main-background">
                <div className="top-whitespace"></div>

                <div className="container white-box">
                <div className={this.state.errorMessage == "" ? "hidden" : alertClasses} role="alert">Please enter a value for every question</div>
                    <div className="quiz-scrollable">
                        <TagName />
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <a className="quiz-btn" onClick={this.handlePrevious}><i className="fas fa-arrow-left"></i></a>
                        </div>
                        <div className="col-md-6">
                            <a className="quiz-btn" onClick={this.handleNext}><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Quiz;