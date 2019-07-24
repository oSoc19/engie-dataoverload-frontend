import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9kaWRlbG9vZiIsImEiOiJjamplYjRqbGY0bW5qM2tsZmpocHNiZmxyIn0.nGxW_OofuTFsGJNDUSm50A';

/**
 * (UNUSED) Old home page displaying a fun map
 */

class Home extends Component {

    constructor() {
        super();
        this.state = {
            lng: 4.6,
            lat: 50.6,
            zoom: 6.5
        };
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;

        return (
            <div className="container content">
                <h2 className="text-center">Fun Map</h2>
                <hr />
                <div className="map-div">
                    <div ref={el => this.mapContainer = el} className="map absolute top right left bottom" />
                </div>
            </div>
        );
    }


}

export default Home;