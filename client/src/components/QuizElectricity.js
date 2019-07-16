import React, { Component } from 'react';

class QuizElectricity extends Component {

  constructor() {
    super();
    this.state = {
        nb_dishwasher: 1,
        //quizValues: model.values
    }

    this.handlePlusMinus = this.handlePlusMinus.bind(this);
  }

  handlePlusMinus(e) {
    var tmp = 1;
    if (e.target.className === 'minus bg-dark') {
        tmp = -1;
    }
    if (e.target.id === 'dishwasher') {
        tmp = Math.min(10, Math.max(0, tmp + this.state.nb_dishwasher));
        this.setState({ nb_dishwasher: tmp });
    }
    // e.preventDefault();
    // var test = e.target.id;
    // this.setState({ nb_dishwashers: this.state.nb_dishwashers})
  }
    
  render() {
    return (
      <div className="container content">
      <h2 className="text-center">Devices consuming electricy</h2>
      <hr />
    <div className="row elec_devices" >
        <div class="qty col-md-6">
            <span class="minus bg-dark" id="dishwasher" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                class="count" 
                name="qty" 
                value={this.state.nb_dishwasher}
                min="1"
                max="10"
                //value={this.state.quizValues.familySize}
            />
            <span class="plus bg-dark" id="dishwasher" onClick={this.handlePlusMinus}>+</span>
            <span class="device_name">Dishwashers</span>
        </div>

        <div class="qty col-md-6">
            <span class="minus bg-dark" id="dishwasher" onClick={this.handlePlusMinus}>-</span>
            <input 
                type="number" 
                class="count" 
                name="computer" 
                value={this.state.nb_dishwasher}
                min="1"
                max="10"
                //value={this.state.quizValues.familySize}
            />
            <span class="plus bg-dark" id="dishwasher" onClick={this.handlePlusMinus}>+</span>
            <span class="device_name">TV screens</span>
        </div>

      </div>


      </div>
    );
  }
}

export default QuizElectricity;