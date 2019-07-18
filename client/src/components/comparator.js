import React, { Component } from 'react';
import ComparatorController from '../controller/comparatorController';
import QuizAPI from '../api/quizAPI';
import FunFactsAPI from '../api/funFactsAPI';
import round from '../util';
import ConsModel from '../model/ConsModel';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

let min_index = 0;
let max_index = 1;

let defaultElec, defaultWater, defaultGas;

function extend(obj, src) {
  for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

function valuetext(value) {
  return `${value}kWh`;
}

// function waterValuetext(value) {
//   return `${value}` + `m`.sup();
// }

// function gasValuetext(value) {
//   return `${value}` + `m`.sup();
// }

class Comparator extends Component {

  constructor() {
    super();
    let model = new ConsModel();
    let basicData = localStorage.getItem('basicData');
    //let consData = localStorage.getItem('consData');
    let elecData = localStorage.getItem('elecData');

    this.state = {
      results: 0,
      solar_prod_location: 10,
      zip_code: 6543,
      consValues: {},
      basicValues: JSON.parse(basicData),
      elecValues: JSON.parse(elecData),
      elec_marks: [
        { value: 2000, label: '2000 kWh', },
        { value: 10000, label: '10000 kWh', },
        { value: 0, label: '', },
        { value: 0, label: 'YOU', },
      ],
      water_marks: [
        { value: 0, label: '0 m³', },
        { value: 250, label: '250 m³', },
        { value: 0, label: '', },
        { value: 0, label: 'YOU', },
      ],
      gas_marks: [
        { value: 500, label: '500 m³', },
        { value: 2500, label: '2500 m³', },
        { value: 0, label: '', },
        { value: 0, label: 'YOU', },
      ]
    }

    this.controller = new ComparatorController();
    this.api = new QuizAPI();
    this.funfacts = new FunFactsAPI();
  }

  componentWillMount() {
    this.api.getSolarProdLocation(this.state.zip_code).then(
      data => {
        this.setState({ solar_prod_location: data[0].avg });
        console.log("solarprod state : " + this.state.solar_prod_location + " prod from query : " + data[0].avg);
      }
    );

    let basicData = localStorage.getItem('basicData');
    let consData = localStorage.getItem('consData');
    let elecData = localStorage.getItem('elecData');

    //If the user inputs his values directly (use of a clone to set the state)
    if (consData == null) {
      //localStorage.setItem('consData', new ConsModel().values);
      this.setState({ basicValues: JSON.parse(basicData) });
      this.setState({ elecValues: JSON.parse(elecData) });
      let basicElecValues = extend(this.state.basicValues, this.state.elecValues);

      this.state.consValues.elecConsYearly = this.controller.getValues(basicElecValues, "electricity");
      this.state.consValues.waterConsYearly = this.controller.getValues(this.state.basicValues, "water");
      this.state.consValues.gasConsYearly = this.controller.getValues(this.state.basicValues, "gas");

      localStorage.setItem('consData', JSON.stringify(this.state.consValues));

    } else {
      let consData = localStorage.getItem('consData');
      let consValues = JSON.parse(consData);
      
      this.state.consValues.elecConsYearly = consValues.elecConsYearly;
      this.state.consValues.waterConsYearly = consValues.waterConsYearly;
      this.state.consValues.gasConsYearly = consValues.gasConsYearly;
    }
    
    //Put the value in the state (using a clone)
    let elec_marks_clone = [...this.state.elec_marks];
    elec_marks_clone[3].value = this.state.consValues.elecConsYearly;
    this.setState({ elec_marks: elec_marks_clone });
    defaultElec = this.state.elec_marks[3].value;

    let water_marks_clone = [...this.state.water_marks];
    water_marks_clone[3].value = this.state.consValues.waterConsYearly;
    this.setState({ water_marks: water_marks_clone });
    defaultWater = this.state.water_marks[3].value;

    let gas_marks_clone = [...this.state.gas_marks];
    gas_marks_clone[3].value = this.state.consValues.gasConsYearly;
    this.setState({ gas_marks: gas_marks_clone });
    defaultGas = this.state.gas_marks[3].value;

    //Updates the value of the slider (using a clone)
    this.funfacts.getFunFacts().then(
      data => {
        let elec_marks_clone = [...this.state.elec_marks];
        elec_marks_clone[2].value = data[0].value;
        elec_marks_clone[2].label = "AVG: " + round(data[0].value, 0) + "kWh";
        elec_marks_clone[3].value = defaultElec;

        let water_marks_clone = [...this.state.water_marks];
        water_marks_clone[2].value = data[2].value;
        water_marks_clone[2].label = "AVG: " + round(data[2].value, 0) + "m³";
        water_marks_clone[3].value = defaultWater;

        let gas_marks_clone = [...this.state.gas_marks];
        gas_marks_clone[2].value = data[1].value;
        gas_marks_clone[2].label = "AVG: " + round(data[1].value, 0) + "m³";
        gas_marks_clone[3].value = defaultGas;
        this.setState({
          gas_marks: gas_marks_clone
        })
        //FOR DEBUGGING WITH CONSOLE
        //, () => console.log("value :" + this.state.elec_marks[3].value + " clone : "+ elec_marks_clone[3].label));
      }
    );
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
              defaultValue={defaultElec}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={100}
              marks={this.state.elec_marks}
              valueLabelDisplay="on"
              min={this.state.elec_marks[min_index].value}
              max={this.state.elec_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <div class="col">
            <Typography id="discrete-slider-always" gutterBottom>
              Water
            </Typography>
            <Slider
              defaultValue={defaultWater}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={this.state.water_marks}
              valueLabelDisplay="on"
              min={this.state.water_marks[min_index].value}
              max={this.state.water_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <div class="col">
            <Typography id="discrete-slider-always" gutterBottom>
              Gas
            </Typography>
            <Slider
              defaultValue={defaultGas}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={this.state.gas_marks}
              valueLabelDisplay="on"
              min={this.state.gas_marks[min_index].value}
              max={this.state.gas_marks[max_index].value}
            />
          </div>
        </div>
        <div class="row" id="results-row">
          <img src="solar_icon.png" className="img-fluid" alt="solar panels" height="100" />
          <div class="col">
            You could produce <b>{round(this.state.solar_prod_location, 4)} kWh</b> per day with solar panels (based on your zip code {this.state.zip_code}) !
          </div>
        </div>
      </div>
    );
  }
}

export default Comparator;
