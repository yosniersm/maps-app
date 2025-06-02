import { type ActionTree } from 'vuex';
import { type MapState } from './state';
import { type StateInterface } from '../index';
import directionsApi from '@/apis/directionsApi';
import type { DirectionsResponse } from '@/interfaces/directions';


export type LngLat = [number, number]



const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {

    const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)

    if (resp.data.routes.length === 0) {
      console.log(resp.data.code)
      return;
    }

    commit('setDistanceDuration', {
      distance: resp.data.routes[0].distance,
      duration: resp.data.routes[0].duration,
    })

    commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates);
  }
}



export default actions;
