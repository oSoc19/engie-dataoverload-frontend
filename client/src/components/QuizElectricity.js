import React, { Component } from 'react';
import FunFactsAPI from '../api/funFactsAPI';
import { ClipLoader } from 'react-spinners';

class QuizElectricity extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">Electricity Info</h2>
                <hr />
                <div className="row">
                    
                </div>
            </div>
        );
    }
}

export default QuizElectricity;