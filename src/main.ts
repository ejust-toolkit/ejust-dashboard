import { createApp } from "vue";

import "vuetify/styles/main.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import OpenLayersMap from "vue3-openlayers";
//import './assets/main.css'
import "vue3-openlayers/dist/vue3-openlayers.css";
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components: components,
  directives: directives,
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);
app.use(OpenLayersMap);
app.use(vuetify);
app.mount("#app");
