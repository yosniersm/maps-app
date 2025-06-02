<template>
  <div v-if="distance" class="trip-container column">
    <div class="col">
      Distance: <strong>{{ distance }} kms</strong>
    </div>
    <div class="col">
      Duration: <strong>{{ duration }} min</strong>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useMapStore } from '@/composables'

export default defineComponent({
  name: 'TripDetails',
  setup() {
    const { duration, distance } = useMapStore()

    return {
      duration,
      distance,
    }
  },
})
</script>
<style scoped>
.trip-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.2);
  font-size: 25px;
  padding: 10px;
  width: 300px;
  position: fixed;
  bottom: 50px;
  left: 20px;
  color: black;
}

strong {
  color: #42b983;
}
</style>
