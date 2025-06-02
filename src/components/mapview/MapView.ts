import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore, useMapStore } from "@/composables";
import mapboxgl from 'mapbox-gl'


export default defineComponent({
  name: 'MapView',
  components: {},

  setup() {
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap, isMapReady, map: mapRef } = useMapStore();

    const mapElement = ref<HTMLDivElement>()

    onMounted(() => {
      if (isUserLocationReady.value) {
        return initMap()
      }
    })

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;

      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      setMap(map);

      const popup = new mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
            <h5>Address</h5>
            <p>Non nisi cillum dolore quis eiusmod do qui ad sint occaecat sit. Voluptate quis exercitation cupidatat id consequat laboris consequat in nostrud sit nulla deserunt. Sunt mollit eu dolor quis voluptate aute elit labore.</p>
            <span>${userLocation.value}</span>
          `)

      const marker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(popup)
        .addTo(map)
    }

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value)
        initMap()
    })

    return {
      isLoading,
      userLocation,
      isUserLocationReady,
      mapElement
    }
  }
})
