import React, { Component } from 'react';

class Info extends Component {

    constructor() {
        super();
        this.state = {
            funFacts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/allaverages').then(
            results => {
                return results.json();
            }
        ).then(
            data => {
                console.log(data);
                let list = data.map((fact) => {
                    console.log(fact);
                    
                    return (
                        <div key={fact.name} className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className={fact.icon + " fa-5x"}></i>
                                    <h5 className="card-title">{fact.name}</h5>
                                    <p className="card-text">{fact.value}</p>
                                </div>
                            </div>
                        </div>
                    );
                });

                this.setState({ funFacts: list }); 
            });
    }

    render() {
        return (
            <div className="container content">
                <h2>Info</h2>
                <hr />
                <div className="row">
                    {this.state.funFacts}
                </div>
            </div>
        );
    }
}

export default Info;