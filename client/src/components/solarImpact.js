import React, { Component } from 'react';
import Chart from 'react-google-charts';
import SolarAPI from '../api/solarAPI';
import { ClipLoader } from 'react-spinners';

class SolarImpact extends Component {

    constructor() {
        super();
        this.state = { chartData: [] };
        this.api = new SolarAPI();

        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.api.getFilter("daily").then(
            data => {
                var arrayData = [['Days', 'Solar panel', 'No solar panels']];

                data.forEach(element => {
                    arrayData.push([element.datepart, parseFloat(element.avg_cons_solar), parseFloat(element.avg_cons_nonsolar)]);
                });
                console.log(arrayData);
                
                this.setState({ chartData: arrayData });
            }
        );
    }

    handleFilter(e) {
        e.preventDefault();
        this.api.getFilter(e.target.id).then(
            data => {
                var arrayData = [['Days', 'Solar panel', 'No solar panels']];

                data.forEach(element => {
                    arrayData.push([element.datepart, parseFloat(element.avg_cons_solar), parseFloat(element.avg_cons_nonsolar)]);
                });

                console.log(arrayData);

                this.setState({ chartData: arrayData });
            }
        );
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">Solar panels impact</h2>
                <hr />

                <div className="time-filters row text-center">
                    <div className="filter col-md-4">
                        <a className="btn btn-primary" id="daily" onClick={this.handleFilter}>Daily</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-primary" id="weekly" onClick={this.handleFilter}>Weekly</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-primary" id="monthly" onClick={this.handleFilter}>Monthly</a>
                    </div>
                </div>

                <div>
                    <Chart
                        height={'500px'}
                        chartType="ColumnChart"
                        loader={<div className="text-center loader">
                            <ClipLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'#009fe3'}
                                loading={this.state.loading}
                            />
                        </div>}
                        data={this.state.chartData}

                        options={{
                            animation: {
                                duration: 1000,
                                easing: 'out',
                                startup: true,
                            },
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