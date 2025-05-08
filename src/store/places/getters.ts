import { type GetterTree } from 'vuex';
import { type PlacesState } from './state';
import { type StateInterface } from '../index';


const getters: GetterTree<PlacesState, StateInterface> = {
  isUserLocationReady(state: PlacesState) {
    return !!state.userLocation;
  },
  userLocation(state: PlacesState) {
    return state.userLocation;
  }
}



export default getters;
