import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container content">
                <h2 className="text-center">About the project</h2>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <p className="about-text">
                            This project took place at the Belgian edition 
                            of <a className="about_ref" href="https://2019.summerofcode.be/">Open Summer of Code 2019</a>,
                            with the collaboration of <a className="about_ref" href="https://www.engie-electrabel.be/fr/">Engie</a>.
                            Our goal is to compare electricity consumption 
                            of people with and without solar panels via a line chart. This website also
                            displays aggregated information about energy and water consumption.
                        </p>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <img src="group_photo_barchart.png" className="img-fluid" alt="group funny barchart"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;