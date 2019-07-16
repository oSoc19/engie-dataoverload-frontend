import React, { Component } from 'react';
import ComparatorController from '../controller/comparatorController';
import QuizAPI from '../api/quizAPI';
import round from '../util';
import ConsModel from '../model/ConsModel';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

let min_index = 0;
let max_index = 1;
let init_index = 3;

const elec_marks = [
  {value: 2000, label: '2000 kWh',},
  {value: 5000, label: '5000 kWh',},
  {value: 3000, label: 'AVG: 4436.59 kWh',},
  {value: 3700, label: 'YOU',},
];

const water_marks = [
  {value: 0, label: '0 m³',},
  {value: 500, label: '500 m³',},
  {value: 72.419, label: 'AVG: 72.42 m³',},
  {value: 123, label: 'YOU',},
];

const gas_marks = [
  {value: 500, label: '500 m³',},
  {value: 2000, label: '2000 m³',},
  {value: 1309.78, label: 'AVG: 1309.78 m³',},
  {value: 987, label: 'YOU',},
];

function valuetext(value) {
  return `${value}kWh`;
}

function waterValuetext(value) {
  return `${value}` + `m`.sup();
}

function gasValuetext(value) {
  return `${value}` + `m`.sup();
}

// function valueLabelFormat(value) {
//   return marks.findIndex(mark => mark.value === value) + 1;
// }

class Comparator extends Component {

  constructor() {
    super();
    let model = new ConsModel();
    let storageData = localStorage.getItem('consData');


    this.state = {
      results: 0,
      solar_prod_location: 10,
      zip_code: 6543,
      consValues: JSON.parse(storageData)
    }

    console.log("test2", this.state.consValues);

    this.controller = new ComparatorController();
    this.api = new QuizAPI();
  }

  componentDidMount() {
    
    this.api.getSolarProdLocation(this.state.zip_code).then(
        data => {               
            this.setState({ solar_prod_location: data[0].avg });
        }
    );

    let storageData = localStorage.getItem('consData');

    if(storageData != null){
        this.setState({consValues:JSON.parse(storageData)});

        elec_marks[3].value = this.state.consValues.elecConsYearly;
        water_marks[3].value = this.state.consValues.waterConsYearly;
        gas_marks[3].value = this.state.consValues.gasConsYearly;
    }   
  }

  render() {
    return (    
      <div className="container content">
      <h2 className="text-center">Yearly consumption results</h2>
      <hr />
        <div class="row" id="results-row">
          <div class="col">
            <Typography id="range-slider" gutterBottom>
              Electricity
            </Typography>
            <Slider
              defaultValue={elec_marks[init_index].value}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={100}
              marks={elec_marks}
              valueLabelDisplay="on"
              min={elec_marks[min_index].value}
              max={elec_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <div class="col">
            <Typography id="discrete-slider-always" gutterBottom>
              Water
            </Typography>
            <Slider
              defaultValue={water_marks[init_index].value}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={100}
              marks={water_marks}
              valueLabelDisplay="on"
              min={water_marks[min_index].value}
              max={water_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <div class="col">
            <Typography id="discrete-slider-always" gutterBottom>
              Gas
            </Typography>
            <Slider
              defaultValue={gas_marks[init_index].value}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={gas_marks}
              valueLabelDisplay="on"
              min={gas_marks[min_index].value}
              max={gas_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <img src="solar_icon.png" className="img-fluid" alt="solar panels" height="100"/>
          <div class="col">
            You could produce <b>{round(this.state.solar_prod_location, 4)} kWh</b> per day with solar panels (based on your zip code {this.state.zip_code}) !  
          </div>
        </div>
      </div>
    );
  }
}

  export default Comparator;
