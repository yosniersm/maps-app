<script src="./SearchBar.ts" lang="ts"></script>

<template>
  <div class="searchbar-container">
    <input type="text" class="form-control" placeholder="Find places..." v-model="searchTerm" />
    <span>{{ searchTerm }}</span>
    <SearchResults />
  </div>
</template>
<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  overflow: hidden;
  padding: 5px;
  background-color: white;
  z-index: 999;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2);
  border-radius: 5px !important;
}
</style>
