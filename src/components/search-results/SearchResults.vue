<script src="./SearchResults.ts" lang="ts"></script>
<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading...</h5>
    <span>Waiting please</span>
  </div>
  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li
      v-for="place in places"
      :key="place.id"
      class="list-group-item list-group-item-action"
      :class="{ active: place.id === activePlace }"
      @click="onPlaceClicked(place)"
    >
      <h5>{{ place.properties.name }}</h5>
      <p>{{ place.properties.full_address }}</p>
      <div align="right">
        <button
          class="btn btn-outline-primary btn-sm"
          :class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'"
        >
          Directions
        </button>
      </div>
    </li>
  </ul>
</template>
<style scoped>
li {
  cursor: pointer;
}
</style>
