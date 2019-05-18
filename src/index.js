console.log("hello from JavaScript");

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3N0YW1waGVyIiwiYSI6ImNqdnR0bHNxMTNrNTYzeW9qdTh4c211M3YifQ.YOKi_HD6xPvkTfvsdfwj5Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});