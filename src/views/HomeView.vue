<script setup lang="ts">
import LocationBtn from '@/components/LocationBtn/LocationBtn.vue'
import MapView from '@/components/mapview/MapView.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<template>
  <main>
    <MapView />
    <LocationBtn />
    <SearchBar />
  </main>
</template>
