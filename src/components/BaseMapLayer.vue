<!-- taken from the vue3-openlayers demo -->
<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="3">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
              Options
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in controls" :key="index" :value="index">
              <template v-slot:prepend>
              <v-list-item-action start><v-checkbox-btn v-model="item.isActive"></v-checkbox-btn></v-list-item-action>
              </template>
                <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col>
        <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px; ">
          <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
          <ol-fullscreen-control v-if="controls.fullscreencontrol.isActive" />
          <ol-mouseposition-control v-if="controls.mousepositioncontrol.isActive" />
          <ol-attribution-control v-if="controls.attributioncontrol.isActive" />

          <ol-overviewmap-control v-if="controls.overviewmapcontrol.isActive">
            <ol-tile-layer>
              <ol-source-osm />
            </ol-tile-layer>
          </ol-overviewmap-control>

          <ol-scaleline-control v-if="controls.scalelinecontrol.isActive" />
          <ol-rotate-control v-if="controls.rotatecontrol.isActive" />
          <ol-zoom-control v-if="controls.zoomcontrol.isActive" />
          <ol-zoomslider-control v-if="controls.zoomslidercontrol.isActive" />
          <ol-zoomtoextent-control v-if="controls.zoomtoextentcontrol.isActive" :extent="[-88.34, 42.34, -86.96, 41.54]"
            tipLabel="Fit to Chicago" />

          <ol-tile-layer>
            <ol-source-osm />
          </ol-tile-layer>
        </ol-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: ['center', 'projection', 'zoom', 'rotation'],
  data() {
    return {
      controls: {
        'fullscreencontrol': { 'label': 'Full Screen Controls', 'isActive': true },
        'attributioncontrol': { 'label': 'Attribution', 'isActive': true },
        'zoomcontrol': { 'label': 'Zoom Control', 'isActive': true },
        'zoomtoextentcontrol': { 'label': 'Zoom to Extent', 'isActive': true },
        'zoomslidercontrol': { 'label': 'Slider', 'isActive': true },
        'scalelinecontrol': { 'label': 'Scale Line', 'isActive': true },
        'overviewmapcontrol': { 'label': 'Overview Map', 'isActive': true },
        'mousepositioncontrol': { 'label': 'Mouse Position', 'isActive': true },
        'rotatecontrol': { 'label': 'Rotate', 'isActive': true },
      }
    };
  },
};
</script>