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

    if (query.length === 0) {
      return [];
    }

    if (!state.userLocation) {
      throw new Error('There is not user location')
    }

    commit('setIsLoadingPlaces');

    const resp = await searchApi.get<PlacesResponse>('/forward', {
      params: {
        proximity: state.userLocation?.join(','),
        q: query
      }
    });

    commit('setPlaces', resp.data.features)

    return resp.data.features;
  }
}


export default actions;
