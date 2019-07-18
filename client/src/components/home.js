import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';

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
                            <div className="col-md-6 text-right"><a className="btn btn-primary" href="/quiz">Do the quiz!</a></div>
                            <div className="col-md-6 text-left"><a className="btn btn-secondary" href="/myconsumption">I know my numbers</a></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}

export default Home;