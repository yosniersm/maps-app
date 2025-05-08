import { type ActionTree } from 'vuex';
import { type PlacesState } from './state';
import { type StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      (err) => {
        console.log(err)
        throw new Error('No geolocation :(')
      }
    )
  }
}



export default actions;
