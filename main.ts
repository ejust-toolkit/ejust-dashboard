import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Static from 'ol/source/ImageStatic';
import ImageLayer from 'ol/layer/Image';

const aodUrl = 'https://neo.gsfc.nasa.gov/servlet/RenderData?si=1826951&cs=rgb&format=JPEG&width=3600&height=1800';

const imageLayer = new ImageLayer();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    imageLayer
  ],
  view: new View({
    center: [0, 0],
    zoom: 3
  })
});

function setSource() {
  const source = new Static({
    url: aodUrl,
    crossOrigin: "",
    projection: "EPSG:4326",
    imageExtent: [-180, -90, 180, 90],
  });
  imageLayer.setSource(source);
}

setSource();

const visibility = document.getElementById('AODopacity');

function setVisibility() {
  console.log(visibility.value)
  imageLayer.setOpacity(+visibility.value)
}

visibility.addEventListener('change', setVisibility)