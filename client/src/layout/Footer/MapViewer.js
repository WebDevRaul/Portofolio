import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// Config
import { API_GOOGLE_MAP } from '../../config/googleMap';

class MapViewer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    return (
      <div className='pl-2 pr-2'>
        <div className=''>
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 51.4543, lng: 0.9781}}
          >
            <Marker position={{ lat: 51.4543, lng: 0.9781}} />
          </Map>
        </div>
      </div>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: API_GOOGLE_MAP.KEY
})(MapViewer);