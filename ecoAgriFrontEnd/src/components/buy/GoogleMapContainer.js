import React from 'react';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  bgcolor: 'background.paper',
  p: 2,
  // boxShadow: 24,
  // pt: 0,
  // pr: 0
};

const center = { lat: 6.864908, lng: 79.899681 }

function GoogleMapContainer() {
  const { isLoaded } = useJsApiLoader({
    ecoAgriGoogleMapApiKey: process.env.ECOAGRI_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  if (!isLoaded) {
    return <p>loading ...</p>
  }
  return (
    <Box sx={{
      // width: 900,
      height: "400px",
      position: "relative"
    }}
    >
      <Box sx={style}>
        <Autocomplete>
          <TextField type="text" />
        </Autocomplete>
      </Box>
      <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: "100%", height: "100%" }}>
        <Marker position={center} />
      </GoogleMap>
    </Box>

  )
}

export default GoogleMapContainer