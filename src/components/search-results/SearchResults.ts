import { defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";
import type { Feature } from "@/interfaces/places";


export default defineComponent({

  name: 'SearchResults',
  setup() {
    const { places, isLoadingPlaces, userLocation } = usePlacesStore();
    const { map, setPlacesMarkers, getRouteBetweenPoints } = useMapStore()

    const activePlace = ref('');

    watch(places, (newPlaces) => {
      setPlacesMarkers(newPlaces);
    })

    return {
      places,
      isLoadingPlaces,
      activePlace,
      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.geometry.coordinates

        map.value.flyTo({
          center: [lng, lat],
          zoom: 15,
        })
      },
      getRouteDirection(place: Feature) {
        if (!userLocation.value) return;

        activePlace.value = place.id;
        const [lng, lat] = place.geometry.coordinates

        const start: [number, number] = userLocation.value
        const end: [number, number] = [lng, lat]

        getRouteBetweenPoints({ start, end })
      }
    }
  }
})
