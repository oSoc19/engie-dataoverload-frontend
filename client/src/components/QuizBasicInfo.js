import React, { Component } from 'react';
import FunFactsAPI from '../api/funFactsAPI';
import { ClipLoader } from 'react-spinners';

class QuizBasicInfo extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {        
        /*let objTest = {
            peopleInHouse: 3,
            roomsInHouse: 4,
            zipCode: 1790,
            preferredRoomTemp: 21
        }
        localStorage.setItem('formData', JSON.stringify(objTest));
        */
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    render() {
        return (
            <div className="container content">
                <h2 className="text-center">Let's begin with some basic information</h2>
                <hr />
                <div className="row text-center">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="peopleInHouse">How many people live in your house?</label>
                                <input type="number" className="form-control" id="peopleInHouse" placeholder="3" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="roomsInHouse">How many rooms are in your house?</label>
                                <input type="number" className="form-control" id="roomsInHouse" placeholder="4" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="zipCode">What is your zip code?</label>
                                <input type="number" className="form-control" id="zipCode" placeholder="1000" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="preferredRoomTemp">what is your preferred room temperature?</label>
                                <input type="number" className="form-control" id="preferredRoomTemp" placeholder="21 °C" />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizBasicInfo;