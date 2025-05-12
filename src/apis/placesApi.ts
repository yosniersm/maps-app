import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.mapbox.com/search/geocode/v6',
  params: {
    limit: 5,
    access_token: 'pk.eyJ1IjoieW9zbmllcnNtIiwiYSI6ImNtYWRuOWNpcTA0aDQybHM4dmNvNzJldXAifQ.UrqPn49-76hbgMrl_n1sog',
    language: 'en'
  }
})


