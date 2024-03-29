import React, { Component } from 'react';
import FunFactsAPI from '../api/funFactsAPI';
import { ClipLoader } from 'react-spinners';
import round from '../util';

/**
 * Fun facts page
 * Displays average of gas, water, electricity, room temperature, solar production, electric injection
 */

class Info extends Component {

    constructor() {
        super();
        this.state = {
            funFacts: [],
            loading: false
        }
        this.api = new FunFactsAPI();
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.api.getFunFacts().then(
            data => {
                let list = data.map((fact) => {
                    let icon = fact.icon;
                    let name = fact.name;
                    let precision = fact.precision;
                    let value = round(fact.value, precision);
                    let unit = fact.unit;

                    return (
                        <div key={name} className="col-md-4 center">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className={icon + " fa-5x"} style={{ color: "#8AB83E" }}></i>
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{value + " " + unit}</p>
                                </div>
                            </div>
                        </div>
                    );
                });

                this.setState({ funFacts: list, loading: false });
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

                <div className="text-center loader">
                    <ClipLoader
                        sizeUnit={"px"}
                        size={80}
                        color={'#8AB83E'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default Info;