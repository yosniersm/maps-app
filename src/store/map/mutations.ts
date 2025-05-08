import { type MutationTree } from 'vuex';
import { type MapState } from './state';
import type { Map } from 'mapbox-gl';


const mutation: MutationTree<MapState> = {
  setMap(state: MapState, map: Map) {
    state.map = map;
  }
}

export default mutation;
