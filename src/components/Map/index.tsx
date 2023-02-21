import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet';
import { memo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import {
  customMarkerIcon,
  mapContainerAttributes,
  markers,
  tileLayerAttributes,
} from '@/constants/map';

import { Container } from './styled';

export const Map = memo(() => (
  <Container>
    <MapContainer
      center={mapContainerAttributes.center as LatLngExpression}
      zoom={mapContainerAttributes.zoom}
    >
      <TileLayer
        url={tileLayerAttributes.url}
        attribution={tileLayerAttributes.attribution}
      />
      {markers.map(({ position, label }) => (
        <Marker
          key={label}
          icon={customMarkerIcon}
          position={position as LatLngExpression}
        >
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </Container>
));
