<script setup lang="ts">
import BaseMapLayer from './components/BaseMapLayer.vue'
</script>

<template>
<v-app>
  <v-navigation-drawer
      model-value
      class="pt-4"
      color="grey-lighten-3"
      rail
    >

      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
  </v-navigation-drawer>
  <v-main>
    <BaseMapLayer :center="[90, 90]" :zoom="2" />
  </v-main>
</v-app>
</template>

<style scoped>
</style>