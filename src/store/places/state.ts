import type { Feature } from "@/interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number] // [lng , lat];
  places: Feature[],
  isLoadingPlaces: boolean

}

function state(): PlacesState {
  return {
    isLoading: false,
    userLocation: undefined,
    places: [],
    isLoadingPlaces: false
  }
}

export default state;
