<template>
  <v-btn id="goTop" @click="goTop" fixed right bottom fab dark color="red">
    <v-icon>mdi-arrow-up-bold</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    goTop() {
      const html = document.documentElement;

      html.scrollTop = 0;
    }
  }
};
</script>

<style>
</style>