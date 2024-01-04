import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import LocationDetails from '../components/LocationDetails'

const libraries = ['places'];
const mapContainerStyle = {
  width: '500px',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const MapContainer = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
      <div className='border-solid border-2 border-gray-500 rounded mx-20'>
    <div className='flex justify-between flex-row-reverse'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
        </GoogleMap>
        
        <div className='flex flex-col justify-center'>
          <LocationDetails />
          <LocationDetails />
          <LocationDetails />
          <LocationDetails />
          <LocationDetails />
          <LocationDetails />
        </div>
        </div>
      </div>
      </>
  );
};

export default MapContainer;