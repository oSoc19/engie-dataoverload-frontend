import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page
 * Gives the choice to either take the quiz or go to the my consumption page
 */

class Home extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-background">
                <div className="home-div">
                    <div className="col-md-12">
                        <h1>Do you know how much you consume?</h1>
                        <i className="fas fa-bolt"></i>
                        <i className="fas fa-tint"></i>
                        <i className="fas fa-burn"></i>

                        <div className="row btn-div">
                            <div className="col-md-6 col-sm-12 text-right"><Link className="btn btn-primary" to="/quiz">Do the quiz!</Link></div>
                            <div className="col-md-6 col-sm-12 text-left"><Link className="btn btn-secondary" to="/myconsumption">I know my numbers</Link></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}

export default Home;