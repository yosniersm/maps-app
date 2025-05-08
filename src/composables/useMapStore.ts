import type { Map } from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {

  const store = useStore();

  return {
    map: computed<Map>(() => store.state.map.map),
    setMap: (map: Map) => store.commit('map/setMap', map),
    isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance)
  }
}
