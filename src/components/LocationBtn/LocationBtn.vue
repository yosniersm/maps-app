<template>
  <button v-if="isBtnReady" class="btn btn-primary" @click="onLocationBtnClick">My Location</button>
</template>
<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'LocationBtn',
  setup() {
    const { isUserLocationReady, userLocation } = usePlacesStore()
    const { isMapReady, map } = useMapStore()

    const onLocationBtnClick = () => {
      map.value.flyTo({
        center: userLocation.value,
        zoom: 15,
      })
    }

    return {
      onLocationBtnClick,
      isBtnReady: computed<boolean>(() => isMapReady.value && isUserLocationReady.value),
    }
  },
})
</script>
<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>
