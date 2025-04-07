
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Coordinates for 6 Marlu Road, Selcourt, Springs, 1559, South Africa
const center = {
  lat: -26.185869,
  lng: 28.449944
};

const LocationMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Location</h2>
          <p className="text-lg text-transport-gray max-w-3xl mx-auto">
            Find us at 6 Marlu Road, Selcourt, Springs, 1559, South Africa
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} title="Me First Group" />
          </GoogleMap>
        </div>
      </div>
    </section>
  ) : (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Location</h2>
          <p className="text-lg text-transport-gray max-w-3xl mx-auto">
            Find us at 6 Marlu Road, Selcourt, Springs, 1559, South Africa
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-[400px] flex items-center justify-center">
          <p className="text-lg text-transport-gray">Loading map...</p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
