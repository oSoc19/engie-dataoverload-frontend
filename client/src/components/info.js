import React, { Component } from 'react';

const precision = 0.001;

class Info extends Component {

    constructor() {
        super();
        this.state = {
            funFacts: [],
            colors: ["#009fe3","#015daa","#5c2583","#62b32e","#bccf03"]
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
                    
                    let icon = fact.icon;
                    let name = fact.name;
                    let value = Math.round(fact.value/precision)*precision;
                    let unit = fact.unit;

                    return (
                        <div key={name} className="col-md-4 center">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className={icon + " fa-5x"} style={{color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]}}></i>
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{value + " " + unit}</p>
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
                <h2 className="text-center">Fun Facts</h2>
                <hr />
                <div className="row">
                    {this.state.funFacts}
                </div>
            </div>
        );
    }
}

export default Info;