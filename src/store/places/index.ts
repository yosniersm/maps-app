import { Module } from 'vuex';
import { type StateInterface } from '../index';

import state, { type PlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const placeModule: Module<PlacesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}


export default placeModule;
