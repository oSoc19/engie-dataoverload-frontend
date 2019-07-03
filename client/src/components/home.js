import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        //this.state = {testdata: []};
    }

    componentDidMount() {
        /*fetch('http://localhost:9000/api/test').then(
            results => {
                return results.json();
            }
        ).then(
            data => {
                let list = data.map((x) => {
                    return (
                        <div>
                            <p>{x.customer_id}, {x.value}, {x.timestamp_begin}</p>
                        </div>
                    );
                });

                this.setState({ testdata: list });
            }
        )*/
    }

    render() {
        return (
            <div className="container content">
                <h2>Home</h2>
                <hr />
                <div>
                    {/*this.state.testdata*/}
                </div>
            </div>
        );
    }
}

export default Home;