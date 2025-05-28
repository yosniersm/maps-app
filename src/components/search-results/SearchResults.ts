import { defineComponent, ref } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";
import type { Feature } from "@/interfaces/places";

export default defineComponent({

  name: 'SearchResults',
  setup() {
    const { places, isLoadingPlaces } = usePlacesStore();
    const { map, } = useMapStore()

    const activePlace = ref('');

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
      }
    }
  }
})
