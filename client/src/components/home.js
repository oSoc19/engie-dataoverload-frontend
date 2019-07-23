import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-background">
                <div className="row home-div">
                    <div className="col-md-12">
                        <h1>Do you know how much you consume?</h1>
                        <i className="fas fa-bolt"></i>
                        <i className="fas fa-tint"></i>
                        <i className="fas fa-burn"></i>

                        <div className="row btn-div">
                            <div className="col-md-6 text-right"><Link className="btn btn-primary" to="/quiz">Do the quiz!</Link></div>
                            <div className="col-md-6 text-left"><Link className="btn btn-secondary" to="/myconsumption">I know my numbers</Link></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}

export default Home;