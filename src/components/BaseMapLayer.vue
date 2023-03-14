<!-- taken from the vue3-openlayers demo -->
<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="3">
        <v-checkbox label="testing"></v-checkbox>
        <v-checkbox v-model="fullscreencontrol" :label="`Full Screen Controls`"></v-checkbox>
        <v-checkbox v-model="attributioncontrol" :label="`Attribution`"></v-checkbox>
        <v-checkbox v-model="zoomcontrol" :label="`Zoom Control`"></v-checkbox>
        <v-checkbox v-model="zoomtoextentcontrol" :label="`Zoom to Extent`"></v-checkbox>
        <v-checkbox v-model="zoomslidercontrol" :label="`Slider`"></v-checkbox>
        <v-checkbox v-model="scalelinecontrol" :label="`Scale Line`"></v-checkbox>
        <v-checkbox v-model="overviewmapcontrol" :label="`Overview Map`"></v-checkbox>
        <v-checkbox v-model="mousepositioncontrol" :label="`Mouse Position`"></v-checkbox>
        <v-checkbox v-model="rotatecontrol" :label="`Rotate`"></v-checkbox>
      </v-col>
      <v-col>
        <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px; " >
          <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
          <ol-fullscreen-control v-if="fullscreencontrol" />
          <ol-mouseposition-control v-if="mousepositioncontrol" />
          <ol-attribution-control v-if="attributioncontrol" />

          <ol-overviewmap-control v-if="overviewmapcontrol">
            <ol-tile-layer>
              <ol-source-osm />
            </ol-tile-layer>
          </ol-overviewmap-control>

          <ol-scaleline-control v-if="scalelinecontrol" />
          <ol-rotate-control v-if="rotatecontrol" />
          <ol-zoom-control v-if="zoomcontrol" />
          <ol-zoomslider-control v-if="zoomslidercontrol" />
          <ol-zoomtoextent-control v-if="zoomtoextentcontrol" :extent="[23.906, 42.812, 46.934, 34.597]"
            tipLabel="Fit to Turkey" />

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
      fullscreencontrol: true,
      attributioncontrol: true,
      zoomcontrol: true,
      zoomslidercontrol: true,
      zoomtoextentcontrol: true,
      scalelinecontrol: true,
      overviewmapcontrol: true,
      mousepositioncontrol: true,
      rotatecontrol: true,
    };
  },
};
</script>