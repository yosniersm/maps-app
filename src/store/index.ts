import { createStore } from 'vuex';

import { type PlacesState } from './places/state';
import placeModule from './places'
import mapModule from './map';

export interface StateInterface {
  places: PlacesState;
}

export default createStore<StateInterface>({
  modules: {
    places: placeModule,
    map: mapModule
  }
})
