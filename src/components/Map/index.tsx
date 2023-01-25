import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from '@/assets/images/map.png';
import { Container } from './styled';
import {
  customMarkerIcon,
  mapContainerAttributes,
  markers,
  tileLayerAttributes,
} from '@/constants/map';

export const Map = () => (
  <Container>
    <MapContainer
      center={mapContainerAttributes.center as LatLngExpression}
      zoom={mapContainerAttributes.zoom}
    >
      <TileLayer
        url={tileLayerAttributes.url}
        attribution={tileLayerAttributes.attribution}
      />
      {markers.map(({ position, label }, index) => (
        <Marker
          key={index}
          icon={customMarkerIcon}
          position={position as LatLngExpression}
        >
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </Container>
);
