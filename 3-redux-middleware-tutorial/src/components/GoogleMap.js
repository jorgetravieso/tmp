import React, { Component } from 'react'


/**
 * google.maps is a js import in index.html
 */
class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }


    render() {
        //can be referenced by this.refs.map
        return <div ref="map" />
    }
}

export default GoogleMap;