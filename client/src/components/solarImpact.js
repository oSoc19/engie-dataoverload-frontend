import React, { Component } from 'react';
import Chart from 'react-google-charts';

class SolarImpact extends Component {

    constructor() {
        super();
        this.state = { chartData: [] };
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/solar').then(
            results => {
                return results.json();
            }
        ).then(
            data => {
                var arrayData = [['Days', 'Solar panel', 'No solar panels']];
                
                data.forEach(element => {
                    arrayData.push([element.date, parseFloat(element.avg_cons_solar), parseFloat(element.avg_cons_nonsolar)]);
                });

                this.setState({ chartData: arrayData });
            });
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">Solar panels impact</h2>
                <hr />

                <div className="time-filters row text-center">
                    <div className="filter col-md-4">
                        <a className="btn btn-primary">Daily</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-primary">Weekly</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-primary">Monthly</a>
                    </div>
                </div>

                <div>
                    <Chart
                        height={'500px'}
                        chartType="ColumnChart"
                        loader={<div>Loading data</div>}
                        data={this.state.chartData}
                        options={{
                            title: 'Energy consumption of users with and without solar panels',
                            hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
                            vAxis: { title: 'Averge energy consuption [kWh]', titleTextStyle: { color: '#333' }, minValue: 0 },
                            // For the legend to fit, we make the chart area smaller
                            chartArea: { width: '70%', height: '70%' },
                            // lineWidth: 25
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SolarImpact;