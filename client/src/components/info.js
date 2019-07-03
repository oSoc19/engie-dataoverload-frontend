import React, { Component } from 'react';

class Info extends Component {

    constructor() {
        super();
        this.state = {
            funFacts: [["fas fa-fire ", "fact1", "676"], ["fas fa-plug", "fact2", "6336"], ["fas fa-tint", "fact3", "476"]]
        }
    }

    componentDidMount() {
        let list = this.state.funFacts.map((fact) => {
            return (
                <div key={fact[1]} className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className={fact[0] + " fa-5x"}></i>
                            <h5 className="card-title">{fact[1]}</h5>
                            <p className="card-text">{fact[2]}</p>
                        </div>
                    </div>
                </div>
            );
        });

        this.setState({ funFacts: list });
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