// Map.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { LocationDetails } from './LocationDetails.js';

class MapContainer extends Component {
  render() {

    const mapStyles = {
      height: '100%',
      width: '50%'
    }
    
    return (
      <div className='flex flex-row-reverse justify-between'>
        <article className='w-1/2 p-4 '>
          <Map
              google={this.props.google}
              zoom={14}
            style={mapStyles}
              initialCenter={{ lat: 37.7749, lng: -122.4194 }}
              >
              <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
            </Map>
        </article>
          <div>
            <LocationDetails />
            <LocationDetails />
            <LocationDetails />
            <LocationDetails />
            <LocationDetails />
            <LocationDetails />
          </div>        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8PUaZKsDfCekzNFQtKGRB8kuEYKXpy7M',
})(MapContainer);
