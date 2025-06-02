import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    access_token: 'pk.eyJ1IjoieW9zbmllcnNtIiwiYSI6ImNtYWRuOWNpcTA0aDQybHM4dmNvNzJldXAifQ.UrqPn49-76hbgMrl_n1sog',
    language: 'en',
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false
  }
})


