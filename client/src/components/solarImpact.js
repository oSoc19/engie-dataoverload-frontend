import React, { Component } from 'react';
import Chart from 'react-google-charts';
import SolarAPI from '../api/solarAPI';
import { ClipLoader } from 'react-spinners';

/* Variable declarations */

let days_nb2str = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

let month_nb2str = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
}

let getAxisLabel = function(filter_type, elem_value) {
    console.log("hhe");
    console.log(filter_type);
    if (filter_type === "daily") {
        return days_nb2str[elem_value];
    } else if (filter_type === "monthly") {
        return month_nb2str[elem_value];
    } else {
        return elem_value;
    }
}

/**
 * SolarImpact class
 * Displays bar chart comparing electricity consumption between users with and without solar panels
 */

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
                var arrayData = [['Days', 'Solar panels', 'No solar panels']];

                data.forEach(element => {
                    arrayData.push([days_nb2str[element.datepart], parseFloat(element.avg_cons_solar), parseFloat(element.avg_cons_nonsolar)]);
                });
                
                this.setState({ chartData: arrayData });
            }
        );
    }

    handleFilter(e) {
        e.preventDefault();
        var current_filter = e.target.id;
        this.api.getFilter(e.target.id).then(
            data => {
                var elem_label;

                var arrayData = [[current_filter, 'Solar panels', 'No solar panels']];

                data.forEach(element => {
                    elem_label = getAxisLabel(current_filter, element.datepart);
                    arrayData.push([elem_label, parseFloat(element.avg_cons_solar), parseFloat(element.avg_cons_nonsolar)]);
                });

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
                        <a className="btn btn-secondary" id="daily" onClick={this.handleFilter}>Daily</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-secondary" id="weekly" onClick={this.handleFilter}>Weekly</a>
                    </div>
                    <div className="filter col-md-4">
                        <a className="btn btn-secondary" id="monthly" onClick={this.handleFilter}>Monthly</a>
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
                                color={'#8AB83E'}
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
                            title: 'Comparison of electricity consumption of users with and without solar panels',
                            colors: ['#50AB39', '#4C4C4C'],
                            // hAxis: { 
                            //     title: 'Date', 
                            //     titleTextStyle: { color: '#333' } 
                            // },
                            vAxis: { 
                                title: 'Average energy consuption [kWh]', 
                                titleTextStyle: { color: '#333' }, minValue: 0 
                            },
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