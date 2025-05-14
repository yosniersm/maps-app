import { defineComponent, ref } from "vue";
import { usePlacesStore } from "@/composables";
import type { Feature } from "@/interfaces/places";

export default defineComponent({

  name: 'SearchResults',
  setup() {
    const { places, isLoadingPlaces } = usePlacesStore();

    const activePlace = ref('');

    return {
      places,
      isLoadingPlaces,
      activePlace,
      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
      }
    }
  }
})
