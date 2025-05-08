import './assets/main.css'

import { createApp } from 'vue'
import mapboxgl from 'mapbox-gl';
import App from './App.vue'
import router from './router'
import store from './store'


if (!navigator.geolocation) {
  alert('Browser does not support Geolocation')
  throw new Error('Browser does not support Geolocation')
}

mapboxgl.accessToken = 'pk.eyJ1IjoieW9zbmllcnNtIiwiYSI6ImNtYWRuOWNpcTA0aDQybHM4dmNvNzJldXAifQ.UrqPn49-76hbgMrl_n1sog'


const app = createApp(App)

app.use(router)
  .use(store)

app.mount('#app')
