import React, { Component } from 'react';
import QuizModel from '../model/QuizModel';

let MAX_NB_DEVICES = 10;
let MIN_NB_DEVICES = 0;

class QuizElectricDevicesModel {
    display = [
        {
            id: "nbFridge",
            name: "Fridges",
            count: "1"
        },
        {
            id: "nbCoffeeMaker",
            name: "Coffee Machines",
            count: "1"
        },
        { 
            id: "nbWashingMachine",
            name: "Washing Machines",
            count: "1"
        },
        { 
            id: "nbElectricToothbrush",
            name: "Electric toothbrushes",
            count: "2"
        },
    ]    
}

class QuizElectricity extends Component {


    constructor() {
        super();
        let elecModel = new QuizElectricDevicesModel();
        let model = new QuizModel();
        for (var i = 0; i < elecModel.display.length; i++) {
            let id = elecModel.display[i].id;
            let count = parseInt(elecModel.display[i].count);
            model.values[id] = count;
        }
        this.state = {
            quizValues: model.values,
            displayValues: elecModel.display,
            renderList: []
        }
        // for (var i = 0; i < this.state.displayValues.length; i++) {
        //     let id = this.state.displayValues[i].id;
        //     let count = parseInt(this.state.displayValues[i].count);
        //     this.setState({quizValues: this.state.quizValues[id] = count});
        // }
        console.log(this.state.quizValues);   
        this.handlePlusMinus = this.handlePlusMinus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }  

    handlePlusMinus(event) {
        event.preventDefault();
        console.log("before ", this.state.quizValues);
        var incr = 1;
        if (event.target.className === 'minus bg-dark') {
            incr = -1;
        }
        var id = event.target.id;
        var nb_devices = parseInt(this.state.quizValues[id]); 
        console.log("->", nb_devices);
        nb_devices = Math.min(MAX_NB_DEVICES, Math.max(MIN_NB_DEVICES, incr + nb_devices));
        console.log("-->", nb_devices);

        let quizValuesCopy = JSON.parse(JSON.stringify(this.state.quizValues));
        console.log(id);
        console.log(quizValuesCopy[id]);
        quizValuesCopy[id] = nb_devices;

        console.log("copy: ", quizValuesCopy);
        this.setState({ quizValues: quizValuesCopy });
        console.log("after ", this.state.quizValues);
    }

    handleChange(event) {
        this.setState({quizData: this.state.quizValues[event.target.id] = parseInt(event.target.value)})
        localStorage.setItem('quizData', JSON.stringify(this.state.quizValues));
        console.log("aaa", localStorage.getItem('quizData'));
        console.log(this.state.quizValues[event.id]);
    }

    componentDidMount() {
        // let storageData = localStorage.getItem('quizData');
        // if(storageData != null){
        //     this.setState({quizValues:JSON.parse(storageData)});
        // } 
        // console.log(localStorage.getItem('quizData'));

        let list = this.state.displayValues.map( (element) => {
            let id = element.id;
            let name = element.name;  
            console.log("render: ", this.state.quizValues);
            console.log("render2: ", this.state.quizValues[id]);
            console.log("element", element);
            return (
                <div className="qty col-md-4" key={id}>
                    <span className="minus bg-dark" id={id} onClick={this.handlePlusMinus}>-</span>
                    <input 
                        type="number" 
                        className="count" 
                        min="1"
                        max="10"
                        value={this.state.quizValues[id]}
                    />
                    <span className="plus bg-dark" id={id} onClick={this.handlePlusMinus}>+</span>
                    <span className="device_name">{name}</span>
                </div>
            );
        });
        this.setState({ renderList: list });
    }
      
    render() {
      return (
          <div className="container content">
          <h2 className="text-center">Devices consuming electricy</h2>
          <hr />
              <div className="row elec_devices" >
                  {this.state.renderList}
              </div>
          </div>
      );
    }
}

export default QuizElectricity;