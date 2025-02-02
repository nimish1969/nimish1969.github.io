import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: 22.3222406,
  lng: 73.0906853,
}

// Define the marker position
const markerPosition = {
  lat: 22.3222406,  // Latitude (same as center for simplicity)
  lng: 73.0906853, // Longitude (same as center for simplicity)
};

function MapComponent() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
     {/* Add a marker to the map */}
     <Marker position={markerPosition} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MapComponent);
