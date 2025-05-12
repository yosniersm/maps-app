import { type ActionTree } from 'vuex';
import { type PlacesState } from './state';
import { type StateInterface } from '../index';
import { searchApi } from '@/apis';
import type { PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      (err) => {
        console.log(err)
        throw new Error('No geolocation :(')
      }
    )
  },

  async searchPlacesByQuery({ commit, state }, query: string) {

    const places = await searchApi.get<PlacesResponse>('/forward', {
      params: {
        proximity: state.userLocation?.join(','),
        q: query
      }
    });

    console.log(places.data)
  }
}


export default actions;
