import { icon } from 'leaflet';
import markerIcon from '@/assets/images/icons/general/marker.svg';

export const markers = [
  {
    position: [55, 30],
    label: 'Marker 1',
  },
  {
    position: [47, 39],
    label: 'Marker 2',
  },
  {
    position: [40, -73],
    label: 'Marker 3',
  },
];

export const customMarkerIcon = icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const tileLayerAttributes = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

export const mapContainerAttributes = {
  center: [55, 30],
  zoom: 13,
};
