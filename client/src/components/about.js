import React, { Component } from 'react';

class About extends Component {

    constructor() {
        super();
        this.team = [
            {
                name: 'Bao',
                img: './people/bao.png',
                github: 'baotrong'
            },
            {
                name: 'Claudia',
                img: './people/claudia.png',
                github: 'baotrong'
            },
            {
                name: 'Jodi',
                img: './people/jodi.png',
                github: 'baotrong'
            },
            {
                name: 'John',
                img: './people/john.png',
                github: 'baotrong'
            },
            {
                name: 'Thomas',
                img: './people/thomas.png',
                github: 'baotrong'
            }
        ]

    }

    render() {
        return (
            <div className="container content">
                <h3 className="text-center">The Project</h3>
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
                        <p className="about-text">
                        <ul>
                          <li>Coffee</li>
                          <li>Tea</li>
                          <li>Milk</li>
                        </ul>
                        </p>
                    </div>
                </div>

                <h3 className="text-center">The Team</h3>
                <hr />
                <div className="row text-center">
                    <div key="person1" className="col-md-2 offset-md-1">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src="./people/bao.png" className="img-fluid" alt="bao"/>
                            <h5 className="card-title-people">Bao</h5>           
                        </div>
                        <div className="row">
                             <div className="col-md-6">
                                <a href="https://github.com/dbtruong" target="_blank">
                                <img src="./logos/GitHub-Mark.png" className="img-fluid-logo" alt="github"/>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <img src="./logos/LI-In-Bug.png" className="img-fluid-logo" alt="linkedin"/>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div key="person1" className="col-md-2 center">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src="./people/bao.png" className="img-fluid" alt="bao"/>
                            <h5 className="card-title-people">Claudia</h5>            
                        </div>
                    </div>
                    </div>

                    <div key="person1" className="col-md-2 center">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src="./people/bao.png" className="img-fluid" alt="bao"/>
                            <h5 className="card-title-people">Jodi</h5>            
                        </div>
                    </div>
                    </div>

                    <div key="person1" className="col-md-2 center">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src="./people/bao.png" className="img-fluid" alt="bao"/>
                            <h5 className="card-title-people">John</h5>           
                        </div>
                    </div>
                    </div>

                    <div key="person1" className="col-md-2 center">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src="./people/bao.png" className="img-fluid" alt="bao"/>
                            <h5 className="card-title-people">Thomas</h5>            
                        </div>
                    </div>
                    </div>

                
                </div>
                <div className="col-md-6 offset-md-3">
                        <img src="group_photo_barchart.png" className="img-fluid" alt="group funny barchart"/>
                </div>

            </div>
        );
    }
}

export default About;