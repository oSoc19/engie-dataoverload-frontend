import React, { Component } from 'react';

class About extends Component {

    constructor() {
        super();
        this.state = {
            team_members: []
        }
        this.team = [
            {
                name: 'Bao',
                img: './people/bao.jpg',
                github: 'baotrong',
                linkedin: 'bao-truong-8752a015b'
            },
            {
                name: 'Claudia',
                img: './people/claudia.jpg',
                github: 'TheClawMonster',
                linkedin: 'claudia-negrila-86b956b7'
            },
            {
                name: 'Jodi',
                img: './people/jodi.jpg',
                github: 'jodiDL',
                linkedin: 'jodideloof'
            },
            {
                name: 'John',
                img: './people/john.jpg',
                github: 'jdewasseige',
                linkedin: 'jdewasseige'
            },
            {
                name: 'Thomas',
                img: './people/thomas.jpg',
                github: 'thduvivier',
                linkedin: 'duvivier-thomas'
            },
            {
                name: 'Wouter',
                img: './people/wouter.jpg',
                github: 'WouterWouters',
                linkedin: 'wouterswouter'
            }
        ]

    }

    componentDidMount() {
        let list = this.team.map((element) => {
            let name = element.name;
            let img = element.img;
            let github = element.github;
            let linkedin = element.linkedin;

            return (
                <div key={name} className="col-md-2">
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src={img} className="img-fluid" alt={name + " picture"}/>
                            <h5 className="card-title-people">{name}</h5>           
                        </div>
                        <div className="row">
                             <div className="col-md-6">
                                <a href={"https://github.com/" + github} target="_blank">
                                <img src="./logos/GitHub-Mark.png" className="img-fluid-logo" alt="github"/>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href={"https://www.linkedin.com/in/" + linkedin} target="_blank">
                                <img src="./logos/LI-In-Bug.png" className="img-fluid-logo" alt="linkedin"/>
                                </a>                            
                            </div>
                        </div>
                    </div>
                </div>
            )

        });
        this.setState({ team_members: list });
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
                    </div>
                </div>

                <h3 className="text-center">The Team</h3>
                <hr />
                <div className="row text-center">
                    {this.state.team_members}                
                </div>

                <div className="row">
                    <div id="funGroupPic" className="col-md-6 offset-md-3">
                        <a href="https://2019.summerofcode.be/2019/insight-the-boxx" target="_blank">
                        <img src="group_photo_barchart.jpg" className="img-fluid" alt="group funny barchart"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;