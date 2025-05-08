import { Map, Marker } from "mapbox-gl";

export interface MapState {
  map?: Map,
  markers: Marker[],
  duration?: number,
  distance?: number
}

function state(): MapState {
  return {
    map: undefined,
    markers: [],
    duration: undefined,
    distance: undefined
  }
}

export default state;
