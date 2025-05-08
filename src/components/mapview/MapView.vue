<script src="./MapView.ts" lang="ts"></script>
<template>
  <div v-if="isLoading" class="loading-map">
    <div class="text-center">
      <h3>Wait please</h3>
      <span>Locating...</span>
    </div>
  </div>
  <div v-show="isUserLocationReady" class="map-container" ref="mapElement"></div>
</template>

<style scoped>
.map-container {
  height: 100vh;
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}

.loading-map {
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>
