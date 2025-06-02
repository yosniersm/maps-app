import type { Feature } from "@/interfaces/places";
import type { LngLat } from "@/store/map/actions";
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
    distance: computed(() => store.state.map.distance),
    setPlacesMarkers: (places: Feature[]) => store.commit('map/setPlacesMarkers', places),
    getRouteBetweenPoints: (coords: { start: LngLat, end: LngLat }) => store.dispatch('map/getRouteBetweenPoints', coords)
  }
}
