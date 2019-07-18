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
                img: './people/bao.png',
                github: 'baotrong',
                linkedin: 'bao-truong-8752a015b'
            },
            {
                name: 'Claudia',
                img: './people/claudia.png',
                github: 'TheClawMonster',
                linkedin: 'claudia-negrila-86b956b7'
            },
            {
                name: 'Jodi',
                img: './people/jodi.png',
                github: 'jodiDL',
                linkedin: 'jodideloof'
            },
            {
                name: 'John',
                img: './people/john.png',
                github: 'jdewasseige',
                linkedin: 'jdewasseige'
            },
            {
                name: 'Thomas',
                img: './people/thomas.png',
                github: 'thduvivier',
                linkedin: 'duvivier-thomas'
            }
        ]

    }

    componentDidMount() {
        let list = this.team.map((element) => {
            let name = element.name;
            let img = element.img;
            let github = element.github;
            let linkedin = element.linkedin;

            let tmpClass = "col-md-2";
            if (name === 'Bao') {
                tmpClass = "col-md-2 offset-md-1";
            }
            return (
                <div key="person1" className={tmpClass}>
                    <div className="card card-people">
                        <div className="card-body text-center">
                            <img src={img} className="img-fluid" alt="bao"/>
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

                <h4 className="text-center">And a fancy bar chart group picture</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <img src="group_photo_barchart.png" className="img-fluid" alt="group funny barchart"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;