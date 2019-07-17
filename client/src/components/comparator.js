import React, { Component } from 'react';
import ComparatorController from '../controller/comparatorController';
import QuizAPI from '../api/quizAPI';
import FunFactsAPI from '../api/funFactsAPI';
import round from '../util';
import ConsModel from '../model/ConsModel';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

let min_index = 0;
let max_index = 1;

let defaultElec, defaultWater, defaultGas;

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


//THIS "VALUES" VARIABLE IS JUST FOR TEST AND SHOULD BE DELETED AFTERWARDS
var values = {
  familySize: 3,
  nbRooms: 5,
  prefRoomTemp: 21,
  houseInsulation: 2, //1 is poor, 2 is average, 3 is good
  nbFridge: 1,
  nbCoffeeMaker: 0,
  nbMicroWaveOven: 1,
  nbElectricOven: 1,
  nbTv: 1,
  nbGamingConsole: 0,
  nbLaptops: 1,
  nbDeskPC: 1,
  nbWashingMachine: 1,
  nbTumbleDryer: 1,
  nbVacuumCleaner: 1,
  nbElectricToothbrush: 0,
  nbHairDryer: 0,
  nbKettle: 0,
  nbShowersPerWeek: 21,
  nbBathsPerWeek: 0,
  dishWasher: true,
  gardenWatering: false,
  pool: false,
  naturalGasConnection: true,
  nbCookingPerWeek: 2,
  typeCooking: "gas" //gas, electric, induction
}

class Comparator extends Component {

  constructor() {
    super();
    let model = new ConsModel();
    let storageData = localStorage.getItem('consData');


    this.state = {
      results: 0,
      solar_prod_location: 10,
      zip_code: 6543,
      consValues: JSON.parse(storageData),
      elec_marks : [
        {value: 2000, label: '2000 kWh',},
        {value: 10000, label: '10000 kWh',},
        {value: 0, label: '',},
        {value: 0, label: 'YOU',},
      ],
       water_marks : [
        {value: 0, label: '0 m³',},
        {value: 250, label: '250 m³',},
        {value: 0, label: '',},
        {value: 0, label: 'YOU',},
      ],
      gas_marks : [
        {value: 500, label: '500 m³',},
        {value: 2500, label: '2500 m³',},
        {value: 0, label: '',},
        {value: 0, label: 'YOU',},
      ]
    }

    console.log("test2", this.state.consValues);

    this.controller = new ComparatorController();
    this.api = new QuizAPI();
    this.funfacts = new FunFactsAPI();
  }

  componentWillMount() {
    this.api.getSolarProdLocation(this.state.zip_code).then(
        data => {
            console.log(data);               
            this.setState({ solar_prod_location: data[0].avg });
            console.log("solarprod state : " + this.state.solar_prod_location + " prod from query : " + data[0].avg);
        }
    );

    let storageData = localStorage.getItem('consData');
    
    //If the user inputs his values directly using a clone to set the state
    if(storageData != null){
        this.setState({consValues:JSON.parse(storageData)});

        let elec_marks_clone = [...this.state.elec_marks];
        elec_marks_clone[3].value = this.state.consValues.elecConsYearly;
        this.setState({elec_marks: elec_marks_clone});
        defaultElec = this.state.elec_marks[3].value;
        
        let water_marks_clone = [...this.state.water_marks];
        water_marks_clone[3].value = this.state.consValues.waterConsYearly;
        this.setState({water_marks : water_marks_clone});
        defaultWater = this.state.water_marks[3].value;

        let gas_marks_clone = [...this.state.gas_marks];
        gas_marks_clone[3].value = this.state.consValues.gasConsYearly;
        this.setState({gas_marks : gas_marks_clone});
        defaultGas = this.state.gas_marks[3].value;

    } else { //If the values come from the quizz and the local storage is null
      defaultElec = this.controller.getValues(values, "electricity");
      defaultWater = this.controller.getValues(values, "water");
      defaultGas = this.controller.getValues(values, "gas");
    }
    
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
