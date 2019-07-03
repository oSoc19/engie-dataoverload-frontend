import React, { Component } from 'react';
import Chart from 'react-google-charts';

class SolarImpact extends Component {

    constructor() {
        super();
        this.state = {chartData: []};
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/test').then(
            results => {
                return results.json();
            }
        ).then(
            data => {
                console.log(data);
                var arrayData = [['Days', 'Solar panel', 'No solar panels']];

                data.forEach(element => {
                    console.log(element);
                    
                });

                this.setState({ chartData: arrayData });
            });
    }

    render() {
        return (
            <div className="container content">
                <h2>Solar impact</h2>
                <hr />
                <div>
                    <Chart
                        height={'500px'}
                        chartType="AreaChart"
                        loader={<div>Loading data</div>}
                        data={[
                            ['Days', 'Solar panel', 'No solar panels'],
                            ['2', 1000, 400],
                            ['5', 1170, 460],
                            ['6', 660, 1120],
                            ['8', 1030, 540],
                            ['11', 1000, 500],
                            ['19', 110, 650],
                        ]}
                        options={{
                            title: 'Relation between solar panels and decrease in energy consumption',
                            hAxis: { title: 'Day', titleTextStyle: { color: '#333' } },
                            vAxis: { title: 'Averge energy consuption', titleTextStyle: { color: '#333' }, minValue: 0 },
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